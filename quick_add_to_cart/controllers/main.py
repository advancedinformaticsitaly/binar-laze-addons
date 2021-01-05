# -*- coding: utf-8 -*-

from odoo import http
from odoo.http import request
from odoo.addons.laze_customize.controllers.main import WebsiteSale


class WebsiteSale(WebsiteSale):

    @http.route()
    def shop(self, page=0, category=None, search='', ppg=False, **post):
        res = super(WebsiteSale, self).shop(page=page, category=category, search=search, ppg=ppg, **post)
        order = request.website.sale_get_order()
        if order and order.state != 'draft':
            request.session['sale_order_id'] = None
            order = request.website.sale_get_order()
        res.qcontext.update({
            'website_sale_order': order,
        })
        return res
