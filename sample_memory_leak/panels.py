def lopa_panel(context, request, datas):
    """
        The lopa as a panel
    """
    print('Lopa panel call: %s' % request.view_name)

    #print(datas)
    return dict(datas=datas)
