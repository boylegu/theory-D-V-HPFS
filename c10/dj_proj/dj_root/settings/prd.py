from .base import *

DEBUG = False

ALLOWED_HOSTS = ['*']

LOG_NAME = 'dj_proj'

LOGGING = {
    'version': 1,
    'disable_existing_loggers': True,
    'filters': {
        'require_debug_false': {
            '()': 'django.utils.log.RequireDebugFalse'
        }
    },
    'formatters': {
        'verbose': {
            'format': "[%(asctime)s] %(levelname)s [%(name)s:%(lineno)s] %(message)s",
            'datefmt': '%d/%b/%Y %H:%M:%S',
        },
        'default': {
            'format': '%(levelname)s %(asctime)s %(message)s',
            'datefmt': '%d/%b/%Y %H:%M:%S',
        },
    },
    'handlers': {
        'mail_admins': {
            'level': 'DEBUG',
            'filters': ['require_debug_false'],
            'class': 'django.utils.log.AdminEmailHandler',
            'formatter': 'default',
        },
        'console': {
            'level': 'DEBUG',
            'class': 'logging.StreamHandler',
            'formatter': 'default',
        },
        'file': {
            'level': 'DEBUG',
            'class': 'logging.handlers.TimedRotatingFileHandler',
            'filename': '/tmp/{}.log'.format(LOG_NAME),
            'when': 'D',
            'interval': 1,
            'backupCount': 10,
            'formatter': 'verbose',
            'encoding': 'utf8',

        },
    },
    'loggers': {
        # '': {
        #     'handlers': ['console', 'file'],
        #     'level': 'DEBUG',
        # },
        LOG_NAME: {
            'handlers': ['console', 'file'],
            'level': 'DEBUG',
        },
        'django.request': {
            'handlers': ['console', 'file'],
            'level': 'DEBUG',
            'propagate': False,
        },
        'django.db.backends': {  # 不要记录 SQL
            'level': 'ERROR',
        },
    }
}