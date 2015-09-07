from pyramid.view import view_config
from .panels import lopa_panel


@view_config(route_name='home',
    renderer='sample_memory_leak:templates/panels/lopa.jinja2',
    http_cache=0)
def myview(request):

    datas = {}
    for i in range(1,1000):
        datas[i] = i

    return lopa_panel(request.context, request, datas)
