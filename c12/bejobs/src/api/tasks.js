import request from '@/api/config';


export function createTaskAPI(data) {
  let req = {}
  req.task_id = data["taskId"]
  req.cmd = data["input"]
  req.ips = data["SelectIps"]

  return request({
    url: '/core/tasks/api/create-task',
    method: 'post',
    headers: {'content-type': 'application/json'},
    data: JSON.stringify(req)
  })

}
