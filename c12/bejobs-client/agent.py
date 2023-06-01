import argparse
import os, sys
import time
import atexit
import signal

from https import StartHttpService


pid_file = '{}/agent.pid'.format(os.path.dirname(os.path.abspath(__file__)))

class Daemon(object):

    def __init__(self, pidfile, stdin='/dev/null',
                 stdout='/dev/null', stderr='/dev/null'):

        self.stdin = stdin
        self.stdout = stdout
        self.stderr = stderr
        self.pidfile = pidfile


    def daemonize(self):

        self.fork()
        self.dettach_env()
        self.fork()
        sys.stdout.flush()
        sys.stderr.flush()
        self.attach_stream('stdin', mode='r')
        self.attach_stream('stdout', mode='a+')
        self.attach_stream('stderr', mode='a+')
        self.create_pidfile()


    def attach_stream(self, name, mode):

        stream = open(getattr(self, name), mode)
        os.dup2(stream.fileno(), getattr(sys, name).fileno())


    def dettach_env(self):

        os.chdir("/")
        os.setsid()
        os.umask(0)


    def fork(self):

        try:
            pid = os.fork()
            if pid > 0:
                sys.exit(0)
        except OSError as e:
            sys.stderr.write("进程Fork失败: %d (%s)\n" % (e.errno, e.strerror))
            sys.exit(1)


    def create_pidfile(self):

        atexit.register(self.delpid)
        pid = str(os.getpid())
        open(self.pidfile,'w+').write("%s\n" % pid)


    def delpid(self):

        os.remove(self.pidfile)


    def start(self):
        pid = self.get_pid()

        if pid:
            message = "agent正在运行？"
            sys.stderr.write(message % self.pidfile)
            sys.exit(1)

        self.daemonize()
        StartHttpService()
        self.run()


    def get_pid(self):

        try:
            pf = open(self.pidfile,'r')
            pid = int(pf.read().strip())
            pf.close()
        except (IOError, TypeError):
            pid = None
        return pid


    def stop(self, silent=False):

        pid = self.get_pid()
        if not pid:
            if not silent:
                message = "agent没有运行"
                sys.stderr.write(message % self.pidfile)
            return
        try:
            while True:
                os.kill(pid, signal.SIGTERM)
                time.sleep(0.1)
        except OSError as err:
            err = str(err)
            if err.find("No such process") > 0:
                if os.path.exists(self.pidfile):
                    os.remove(self.pidfile)
            else:
                sys.stdout.write(str(err))
                sys.exit(1)


    def restart(self):

        self.stop(silent=True)
        self.start()


    def run(self):
        raise NotImplementedError



def arguments_reader():

    parser = argparse.ArgumentParser(description='bejobs_agent ver_1.0.0')
    parser.add_argument('operation',
        metavar='OPERATION',
        type=str,
        help='支持start, stop, restart, status',
        choices=['start', 'stop', 'restart', 'status'])
    args = parser.parse_args()
    operation = args.operation
    return operation


class Agent(Daemon):

    def run(self):
        while True:pass

if __name__ == "__main__":

    action = arguments_reader()
    daemon = Agent(pid_file,)

    if action == 'start':
        print("启动agent")
        daemon.start()

        pid = daemon.get_pid()
        if not pid:
            print("agent未启动")
        else:
            print("agent正在运行")

    elif action == 'stop':
        print("停止agent")
        daemon.stop()

    elif action == 'restart':
        print("重启agent")
        daemon.restart()

    elif action == 'status':
        print("查看agent状态")
        pid = daemon.get_pid()

        if not pid:
            print("agent没有运行")
        else:
            print("agent正在运行")

    sys.exit(0)