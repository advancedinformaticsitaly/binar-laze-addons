odoo.define('alan_product_cart.ProductCart', function(require){
    'use strict';

    var sAnimations = require('website.content.snippets.animation');
    var wSaleUtils = require('website_sale.utils');
    var random_index = 0;
    var random_class_list = ["warning", "primary", "secondary"];

    sAnimations.registry.websiteSaleCartLink = sAnimations.Class.extend({
        selector: '.oe_website_sale',
        read_events: {
            'click .js_add_cart': '_onAddToCart',
        },
        _onAddToCart: function (ev) {
            var self = this;
            var $card = $(ev.currentTarget).closest('.pro-icons');
            this._rpc({
                route: "/shop/cart/update_json",
                params: {
                    product_id: $card.find('input[data-product-id]').data('product-id'),
                    add_qty: 1
                },
            }).then(function (data) {
                var $navButton = $('.o_affix_enabled').find('#my_cart');
                if (!$(ev.currentTarget).hasClass("as-color") && !data['warning']) {
                    $(ev.currentTarget).addClass("as-color");
                }
                if(data['warning']){
                    if($("#wrapwrap > #cart_warning_content").length === 0)
                        $("#wrapwrap").append("<div id='cart_warning_content'></div>");
                    $("#wrapwrap > #cart_warning_content").append("<div class='add_cart_warning alert alert-" + random_class_list[random_index % 3] + " alert-dismissible fade show'  role='alert'><p class='warning-msg'>" + data['warning'] + "</p><button class='close-btn' type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>");
                    random_index++;
                }
                wSaleUtils.animateClone($navButton, $(ev.currentTarget).parents('.oe_product_cart'), 25, 40);
                $('.my_cart_quantity').html(data.cart_quantity || '<i class="fa fa-warning" /> ');
            });
        },
    });
});
