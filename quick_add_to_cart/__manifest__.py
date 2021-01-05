# -*- coding: utf-8 -*-
{
    'name': 'Quick Add to Cart',
    'category': 'Website',
    'summary': 'Quick Add to Cart',
    'version': '1.0',
    'license': 'OPL-1',
    'author': 'Atharva System',
    'website': 'https://www.atharvasystem.com',
    'support': 'support@atharvasystem.com',
    'description': """
Quick Add to Cart[12.0]
====================
1. When clicking on add to cart product add into cart without redirect to shopping cart page.
2. If the product contains a variant then redirect to the product page.
3. Give some js fly effect when product adding into cart. This would apply for each time when click on add to cart. 
4. If a user clicks on add to cart multiple time increase qty in cart.
5. Change the color of the add to cart button for those products which are already in cart. 
6. Add Option in customisation section to Enable / disable this full feature "Ajax Add to cart"
7. Manage inventory notification with qucik add to cart
    """,
    'depends': ['laze_customize'],
    'data': [
        'views/assets.xml',
        'views/template.xml',
    ],
    'images': ['static/description/icon.png'],
    'installable': True,
    'application': True,
}
