# Odoo API v1 - Live Responses

Base URL: `http://localhost:3000`

Captured at: 2026-01-05T18:06:30


## GET `/products/fields`

Status: 200

```json
{
  "id": {
    "required": false,
    "string": "ID",
    "type": "integer"
  },
  "display_name": {
    "required": false,
    "string": "Display Name",
    "type": "char"
  },
  "website_id": {
    "required": false,
    "string": "Website",
    "type": "many2one"
  },
  "website_published": {
    "required": false,
    "string": "Visible on current website",
    "type": "boolean"
  },
  "is_published": {
    "required": false,
    "string": "Is Published",
    "type": "boolean"
  },
  "can_publish": {
    "required": false,
    "string": "Can Publish",
    "type": "boolean"
  },
  "website_url": {
    "required": false,
    "string": "Website URL",
    "type": "char"
  },
  "website_absolute_url": {
    "required": false,
    "string": "Website Absolute URL",
    "type": "char"
  },
  "is_seo_optimized": {
    "required": false,
    "string": "SEO optimized",
    "type": "boolean"
  },
  "website_meta_title": {
    "required": false,
    "string": "Website meta title",
    "type": "char"
  },
  "website_meta_description": {
    "required": false,
    "string": "Website meta description",
    "type": "text"
  },
  "website_meta_keywords": {
    "required": false,
    "string": "Website meta keywords",
    "type": "char"
  },
  "website_meta_og_img": {
    "required": false,
    "string": "Website opengraph image",
    "type": "char"
  },
  "seo_name": {
    "required": false,
    "string": "Seo name",
    "type": "char"
  },
  "image_1920": {
    "required": false,
    "string": "Image",
    "type": "binary"
  },
  "image_1024": {
    "required": false,
    "string": "Image 1024",
    "type": "binary"
  },
  "image_512": {
    "required": false,
    "string": "Image 512",
    "type": "binary"
  },
  "image_256": {
    "required": false,
    "string": "Image 256",
    "type": "binary"
  },
  "image_128": {
    "required": false,
    "string": "Image 128",
    "type": "binary"
  },
  "activity_ids": {
    "required": false,
    "string": "Activities",
    "type": "one2many"
  },
  "activity_state": {
    "required": false,
    "string": "Activity State",
    "type": "selection"
  },
  "activity_user_id": {
    "required": false,
    "string": "Responsible User",
    "type": "many2one"
  },
  "activity_type_id": {
    "required": false,
    "string": "Next Activity Type",
    "type": "many2one"
  },
  "activity_type_icon": {
    "required": false,
    "string": "Activity Type Icon",
    "type": "char"
  },
  "activity_date_deadline": {
    "required": false,
    "string": "Next Activity Deadline",
    "type": "date"
  },
  "my_activity_date_deadline": {
    "required": false,
    "string": "My Activity Deadline",
    "type": "date"
  },
  "activity_summary": {
    "required": false,
    "string": "Next Activity Summary",
    "type": "char"
  },
  "activity_exception_decoration": {
    "required": false,
    "string": "Activity Exception Decoration",
    "type": "selection"
  },
  "activity_exception_icon": {
    "required": false,
    "string": "Icon",
    "type": "char"
  },
  "activity_calendar_event_id": {
    "required": false,
    "string": "Next Activity Calendar Event",
    "type": "many2one"
  },
  "message_is_follower": {
    "required": false,
    "string": "Is Follower",
    "type": "boolean"
  },
  "message_follower_ids": {
    "required": false,
    "string": "Followers",
    "type": "one2many"
  },
  "message_partner_ids": {
    "required": false,
    "string": "Followers (Partners)",
    "type": "many2many"
  },
  "message_ids": {
    "required": false,
    "string": "Messages",
    "type": "one2many"
  },
  "has_message": {
    "required": false,
    "string": "Has Message",
    "type": "boolean"
  },
  "message_needaction": {
    "required": false,
    "string": "Action Needed",
    "type": "boolean"
  },
  "message_needaction_counter": {
    "required": false,
    "string": "Number of Actions",
    "type": "integer"
  },
  "message_has_error": {
    "required": false,
    "string": "Message Delivery error",
    "type": "boolean"
  },
  "message_has_error_counter": {
    "required": false,
    "string": "Number of errors",
    "type": "integer"
  },
  "message_attachment_count": {
    "required": false,
    "string": "Attachment Count",
    "type": "integer"
  },
  "rating_ids": {
    "required": false,
    "string": "Ratings",
    "type": "one2many"
  },
  "website_message_ids": {
    "required": false,
    "string": "Website Messages",
    "type": "one2many"
  },
  "message_has_sms_error": {
    "required": false,
    "string": "SMS Delivery error",
    "type": "boolean"
  },
  "name": {
    "required": true,
    "string": "Name",
    "type": "char"
  },
  "sequence": {
    "required": false,
    "string": "Sequence",
    "type": "integer"
  },
  "description": {
    "required": false,
    "string": "Description",
    "type": "html"
  },
  "description_purchase": {
    "required": false,
    "string": "Purchase Description",
    "type": "text"
  },
  "description_sale": {
    "required": false,
    "string": "Sales Description",
    "type": "text"
  },
  "type": {
    "required": true,
    "string": "Product Type",
    "type": "selection"
  },
  "combo_ids": {
    "required": false,
    "string": "Combo Choices",
    "type": "many2many"
  },
  "service_tracking": {
    "required": true,
    "string": "Create on Order",
    "type": "selection"
  },
  "categ_id": {
    "required": false,
    "string": "Product Category",
    "type": "many2one"
  },
  "currency_id": {
    "required": false,
    "string": "Currency",
    "type": "many2one"
  },
  "cost_currency_id": {
    "required": false,
    "string": "Cost Currency",
    "type": "many2one"
  },
  "list_price": {
    "required": false,
    "string": "Sales Price",
    "type": "float"
  },
  "standard_price": {
    "required": false,
    "string": "Cost",
    "type": "float"
  },
  "volume": {
    "required": false,
    "string": "Volume",
    "type": "float"
  },
  "volume_uom_name": {
    "required": false,
    "string": "Volume unit of measure label",
    "type": "char"
  },
  "weight": {
    "required": false,
    "string": "Weight",
    "type": "float"
  },
  "weight_uom_name": {
    "required": false,
    "string": "Weight unit of measure label",
    "type": "char"
  },
  "sale_ok": {
    "required": false,
    "string": "Sales",
    "type": "boolean"
  },
  "purchase_ok": {
    "required": false,
    "string": "Purchase",
    "type": "boolean"
  },
  "uom_id": {
    "required": true,
    "string": "Unit",
    "type": "many2one"
  },
  "uom_ids": {
    "required": false,
    "string": "Packagings",
    "type": "many2many"
  },
  "uom_name": {
    "required": false,
    "string": "Unit Name",
    "type": "char"
  },
  "company_id": {
    "required": false,
    "string": "Company",
    "type": "many2one"
  },
  "seller_ids": {
    "required": false,
    "string": "Vendors",
    "type": "one2many"
  },
  "variant_seller_ids": {
    "required": false,
    "string": "Variant Seller",
    "type": "one2many"
  },
  "active": {
    "required": false,
    "string": "Active",
    "type": "boolean"
  },
  "color": {
    "required": false,
    "string": "Color Index",
    "type": "integer"
  },
  "is_product_variant": {
    "required": false,
    "string": "Is a product variant",
    "type": "boolean"
  },
  "attribute_line_ids": {
    "required": false,
    "string": "Product Attributes",
    "type": "one2many"
  },
  "valid_product_template_attribute_line_ids": {
    "required": false,
    "string": "Valid Product Attribute Lines",
    "type": "many2many"
  },
  "product_variant_ids": {
    "required": true,
    "string": "Products",
    "type": "one2many"
  },
  "product_variant_id": {
    "required": false,
    "string": "Product",
    "type": "many2one"
  },
  "product_variant_count": {
    "required": false,
    "string": "# Product Variants",
    "type": "integer"
  },
  "barcode": {
    "required": false,
    "string": "Barcode",
    "type": "char"
  },
  "default_code": {
    "required": false,
    "string": "Internal Reference",
    "type": "char"
  },
  "pricelist_rule_ids": {
    "required": false,
    "string": "Pricelist Rules",
    "type": "one2many"
  },
  "product_document_ids": {
    "required": false,
    "string": "Documents",
    "type": "one2many"
  },
  "product_document_count": {
    "required": false,
    "string": "Documents Count",
    "type": "integer"
  },
  "can_image_1024_be_zoomed": {
    "required": false,
    "string": "Can Image 1024 be zoomed",
    "type": "boolean"
  },
  "has_configurable_attributes": {
    "required": false,
    "string": "Is a configurable product",
    "type": "boolean"
  },
  "is_dynamically_created": {
    "required": false,
    "string": "Is Dynamically Created",
    "type": "boolean"
  },
  "product_tooltip": {
    "required": false,
    "string": "Product Tooltip",
    "type": "char"
  },
  "is_favorite": {
    "required": false,
    "string": "Favorite",
    "type": "boolean"
  },
  "product_tag_ids": {
    "required": false,
    "string": "Tags",
    "type": "many2many"
  },
  "product_properties": {
    "required": false,
    "string": "Properties",
    "type": "properties"
  },
  "create_uid": {
    "required": false,
    "string": "Created by",
    "type": "many2one"
  },
  "create_date": {
    "required": false,
    "string": "Created on",
    "type": "datetime"
  },
  "write_uid": {
    "required": false,
    "string": "Last Updated by",
    "type": "many2one"
  },
  "write_date": {
    "required": false,
    "string": "Last Updated on",
    "type": "datetime"
  },
  "taxes_id": {
    "required": false,
    "string": "Sales Taxes",
    "type": "many2many"
  },
  "tax_string": {
    "required": false,
    "string": "Tax String",
    "type": "char"
  },
  "supplier_taxes_id": {
    "required": false,
    "string": "Purchase Taxes",
    "type": "many2many"
  },
  "property_account_income_id": {
    "required": false,
    "string": "Income Account",
    "type": "many2one"
  },
  "property_account_expense_id": {
    "required": false,
    "string": "Expense Account",
    "type": "many2one"
  },
  "account_tag_ids": {
    "required": false,
    "string": "Account Tags",
    "type": "many2many"
  },
  "fiscal_country_codes": {
    "required": false,
    "string": "Fiscal Country Codes",
    "type": "char"
  },
  "is_storable": {
    "required": false,
    "string": "Track Inventory",
    "type": "boolean"
  },
  "responsible_id": {
    "required": false,
    "string": "Responsible",
    "type": "many2one"
  },
  "property_stock_production": {
    "required": false,
    "string": "Production Location",
    "type": "many2one"
  },
  "property_stock_inventory": {
    "required": false,
    "string": "Inventory Location",
    "type": "many2one"
  },
  "sale_delay": {
    "required": false,
    "string": "Customer Lead Time",
    "type": "integer"
  },
  "tracking": {
    "required": true,
    "string": "Tracking",
    "type": "selection"
  },
  "lot_sequence_id": {
    "required": false,
    "string": "Serial/Lot Numbers Sequence",
    "type": "many2one"
  },
  "serial_prefix_format": {
    "required": false,
    "string": "Custom Lot/Serial",
    "type": "char"
  },
  "next_serial": {
    "required": false,
    "string": "Next Serial",
    "type": "char"
  },
  "description_picking": {
    "required": false,
    "string": "Description on Picking",
    "type": "text"
  },
  "description_pickingout": {
    "required": false,
    "string": "Description on Delivery Orders",
    "type": "text"
  },
  "description_pickingin": {
    "required": false,
    "string": "Description on Receptions",
    "type": "text"
  },
  "qty_available": {
    "required": false,
    "string": "Quantity On Hand",
    "type": "float"
  },
  "virtual_available": {
    "required": false,
    "string": "Forecasted Quantity",
    "type": "float"
  },
  "incoming_qty": {
    "required": false,
    "string": "Incoming",
    "type": "float"
  },
  "outgoing_qty": {
    "required": false,
    "string": "Outgoing",
    "type": "float"
  },
  "location_id": {
    "required": false,
    "string": "Location",
    "type": "many2one"
  },
  "warehouse_id": {
    "required": false,
    "string": "Warehouse",
    "type": "many2one"
  },
  "has_available_route_ids": {
    "required": false,
    "string": "Routes can be selected on this product",
    "type": "boolean"
  },
  "route_ids": {
    "required": false,
    "string": "Routes",
    "type": "many2many"
  },
  "nbr_moves_in": {
    "required": false,
    "string": "Nbr Moves In",
    "type": "integer"
  },
  "nbr_moves_out": {
    "required": false,
    "string": "Nbr Moves Out",
    "type": "integer"
  },
  "nbr_reordering_rules": {
    "required": false,
    "string": "Reordering Rules",
    "type": "integer"
  },
  "reordering_min_qty": {
    "required": false,
    "string": "Reordering Min Qty",
    "type": "float"
  },
  "reordering_max_qty": {
    "required": false,
    "string": "Reordering Max Qty",
    "type": "float"
  },
  "route_from_categ_ids": {
    "required": false,
    "string": "Category Routes",
    "type": "many2many"
  },
  "show_on_hand_qty_status_button": {
    "required": false,
    "string": "Show On Hand Qty Status Button",
    "type": "boolean"
  },
  "show_forecasted_qty_status_button": {
    "required": false,
    "string": "Show Forecasted Qty Status Button",
    "type": "boolean"
  },
  "show_qty_update_button": {
    "required": false,
    "string": "Show Qty Update Button",
    "type": "boolean"
  },
  "cost_method": {
    "required": false,
    "string": "Cost Method",
    "type": "selection"
  },
  "valuation": {
    "required": false,
    "string": "Valuation",
    "type": "selection"
  },
  "lot_valuated": {
    "required": false,
    "string": "Valuation by Lot/Serial number",
    "type": "boolean"
  },
  "l10n_in_hsn_code": {
    "required": false,
    "string": "HSN/SAC Code",
    "type": "char"
  },
  "l10n_in_hsn_warning": {
    "required": false,
    "string": "HSC/SAC warning",
    "type": "text"
  },
  "l10n_in_is_gst_registered_enabled": {
    "required": false,
    "string": "L10N In Is Gst Registered Enabled",
    "type": "boolean"
  },
  "service_type": {
    "required": false,
    "string": "Track Service",
    "type": "selection"
  },
  "sale_line_warn_msg": {
    "required": false,
    "string": "Message for Sales Order Line",
    "type": "text"
  },
  "expense_policy": {
    "required": false,
    "string": "Re-Invoice Costs",
    "type": "selection"
  },
  "visible_expense_policy": {
    "required": false,
    "string": "Re-Invoice Policy visible",
    "type": "boolean"
  },
  "sales_count": {
    "required": false,
    "string": "Sold",
    "type": "float"
  },
  "invoice_policy": {
    "required": false,
    "string": "Invoicing Policy",
    "type": "selection"
  },
  "optional_product_ids": {
    "required": false,
    "string": "Optional Products",
    "type": "many2many"
  },
  "hs_code": {
    "required": false,
    "string": "HS Code",
    "type": "char"
  },
  "country_of_origin": {
    "required": false,
    "string": "Origin of Goods",
    "type": "many2one"
  },
  "rating_last_value": {
    "required": false,
    "string": "Rating Last Value",
    "type": "float"
  },
  "rating_last_feedback": {
    "required": false,
    "string": "Rating Last Feedback",
    "type": "text"
  },
  "rating_last_image": {
    "required": false,
    "string": "Rating Last Image",
    "type": "binary"
  },
  "rating_count": {
    "required": false,
    "string": "Rating count",
    "type": "integer"
  },
  "rating_avg": {
    "required": false,
    "string": "Average Rating",
    "type": "float"
  },
  "rating_avg_text": {
    "required": false,
    "string": "Rating Avg Text",
    "type": "selection"
  },
  "rating_percentage_satisfaction": {
    "required": false,
    "string": "Rating Satisfaction",
    "type": "float"
  },
  "rating_last_text": {
    "required": false,
    "string": "Rating Text",
    "type": "selection"
  },
  "website_description": {
    "required": false,
    "string": "Description for the website",
    "type": "html"
  },
  "description_ecommerce": {
    "required": false,
    "string": "eCommerce Description",
    "type": "html"
  },
  "alternative_product_ids": {
    "required": false,
    "string": "Alternative Products",
    "type": "many2many"
  },
  "accessory_product_ids": {
    "required": false,
    "string": "Accessory Products",
    "type": "many2many"
  },
  "website_size_x": {
    "required": false,
    "string": "Size X",
    "type": "integer"
  },
  "website_size_y": {
    "required": false,
    "string": "Size Y",
    "type": "integer"
  },
  "website_ribbon_id": {
    "required": false,
    "string": "Ribbon",
    "type": "many2one"
  },
  "website_sequence": {
    "required": false,
    "string": "Website Sequence",
    "type": "integer"
  },
  "public_categ_ids": {
    "required": false,
    "string": "Website Product Category",
    "type": "many2many"
  },
  "publish_date": {
    "required": true,
    "string": "Publish Date",
    "type": "datetime"
  },
  "product_template_image_ids": {
    "required": false,
    "string": "Extra Product Media",
    "type": "one2many"
  },
  "base_unit_count": {
    "required": true,
    "string": "Base Unit Count",
    "type": "float"
  },
  "base_unit_id": {
    "required": false,
    "string": "Custom Unit of Measure",
    "type": "many2one"
  },
  "base_unit_price": {
    "required": false,
    "string": "Price Per Unit",
    "type": "monetary"
  },
  "base_unit_name": {
    "required": false,
    "string": "Base Unit Name",
    "type": "char"
  },
  "compare_list_price": {
    "required": false,
    "string": "Compare to Price",
    "type": "monetary"
  },
  "allow_out_of_stock_order": {
    "required": false,
    "string": "Continue selling when out-of-stock",
    "type": "boolean"
  },
  "available_threshold": {
    "required": false,
    "string": "Show Threshold",
    "type": "float"
  },
  "show_availability": {
    "required": false,
    "string": "Show availability Qty",
    "type": "boolean"
  },
  "out_of_stock_message": {
    "required": false,
    "string": "Out-of-Stock Message",
    "type": "html"
  },
  "x_studio_sku": {
    "required": false,
    "string": "SKU",
    "type": "char"
  },
  "x_studio_char_field_46r_1jcm2avfl": {
    "required": false,
    "string": "New Text",
    "type": "char"
  },
  "x_studio_features": {
    "required": false,
    "string": "Features",
    "type": "html"
  },
  "x_studio_integer_field_8jh_1jcm2jhuf": {
    "required": false,
    "string": "New Integer",
    "type": "integer"
  },
  "x_studio_selection_field_75k_1jcm2f0o4": {
    "required": false,
    "string": "Product Category",
    "type": "selection"
  },
  "x_studio_stock_quantity": {
    "required": false,
    "string": "Stock Quantity",
    "type": "integer"
  },
  "x_studio_is_custom": {
    "required": false,
    "string": "Is Custom",
    "type": "boolean"
  },
  "x_studio_product_rating": {
    "required": false,
    "string": "Product Rating",
    "type": "char"
  },
  "x_studio_jacket_color": {
    "required": false,
    "string": "Jacket Color",
    "type": "selection"
  },
  "x_studio_fiber_count": {
    "required": false,
    "string": "Fiber Count",
    "type": "integer"
  },
  "x_studio_testing": {
    "required": false,
    "string": "Testing",
    "type": "char"
  },
  "x_studio_vendor_model_": {
    "required": false,
    "string": "Vendor Model #",
    "type": "char"
  },
  "x_studio_cable_type": {
    "required": false,
    "string": "Cable Type",
    "type": "selection"
  },
  "x_studio_test": {
    "required": false,
    "string": "test",
    "type": "char"
  },
  "x_studio_map_minimum_advertised_price": {
    "required": false,
    "string": "MAP (minimum advertised price)",
    "type": "char"
  },
  "x_studio_data_sheet_pdf": {
    "required": false,
    "string": "Data Sheet (PDF)",
    "type": "char"
  },
  "x_studio_purchase_measure": {
    "required": false,
    "string": "Purchase Measure",
    "type": "char"
  },
  "x_studio_country_of_origin": {
    "required": false,
    "string": "Country Of Origin",
    "type": "char"
  },
  "x_studio_width_inches": {
    "required": false,
    "string": "Width (inches)",
    "type": "char"
  },
  "x_studio_weight_lbs": {
    "required": false,
    "string": "Weight (lbs)",
    "type": "char"
  },
  "x_studio_feature_list": {
    "required": false,
    "string": "Feature List",
    "type": "html"
  },
  "x_studio_distributor_cost": {
    "required": false,
    "string": "Distributor Cost",
    "type": "char"
  },
  "x_studio_moq_minimum_order_quantity": {
    "required": false,
    "string": "MOQ (Minimum Order Quantity)",
    "type": "char"
  },
  "x_studio_length_inches": {
    "required": false,
    "string": "Length (inches)",
    "type": "char"
  },
  "x_studio_height_inches": {
    "required": false,
    "string": "Height (inches)",
    "type": "char"
  },
  "x_studio_upc_code": {
    "required": false,
    "string": "UPC Code",
    "type": "char"
  },
  "x_studio_ship_ups_or_freight": {
    "required": false,
    "string": "Ship UPS or Freight",
    "type": "selection"
  },
  "x_studio_warranty": {
    "required": false,
    "string": "Warranty",
    "type": "char"
  },
  "x_studio_length_available": {
    "required": false,
    "string": "Length Available",
    "type": "char"
  }
}
```

## GET `/product/type-values`

Status: 200

```json
[
  [
    "consu",
    "Goods"
  ],
  [
    "service",
    "Service"
  ],
  [
    "combo",
    "Combo"
  ]
]
```

## GET `/products`

Status: 200

```json
{
  "success": true,
  "count": 69,
  "products": [
    {
      "id": 1474,
      "display_name": " SM12L-MM12L-A2M4-IOPY -250",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/sm12l-mm12l-a2m4-iopy-250-1474",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/sm12l-mm12l-a2m4-iopy-250-1474",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEV+2NhQlgAARX7anVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEV+2NhQlgAARX7anVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAEAAElEQVR42oT9a6xlW3Yeho1vzLX23ufUqapb9923yX6TTbZFUqRoRbbsWIqdKEIcy9EjB...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAEAAElEQVR42qT9aaw1WZYdhq11zonhzm/6psyssUeyqWaT3ebQnCnYAEl4ECBQEpo2LRMyT...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAABJFElEQVR42sW9aaxl2XUe9q2995nv9OZ6NXX1yGaTbJFUkxQpUlQkO7IjxzAQD3BkOI4dO...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": " SM12L-MM12L-A2M4-IOPY -250",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        13,
        "Fiber Optic Bulk Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 1999.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1439
      ],
      "product_variant_id": [
        1439,
        " SM12L-MM12L-A2M4-IOPY -250"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a02,299.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "24 Strand 250FT (12-SM + 12-MM OM4) space saving \ncomposite Stainless Steel Armored I/O Water Blocking OFCP Plenum fiber\n\nThe SM12L-MM12L-A2M4-IOPY offers a smarter, more efficient way to deploy fiber by combining 12 Singlemode (G657.A2) and 12 Multimode (OM4) strands in a single armored cable\u2014allowing you to run both modes at once and eliminate the need for multiple pulls. \n\nA built-in water-blocking system with multiple yarns safeguards against moisture ingress, ensuring long-term performance even in challenging environments. Engineered to withstand extreme temperatures from -15\u00b0C to +60\u00b0C, this cable is ready for tough conditions. Its plenum-rated OFCP outer jacket meets stringent fire and smoke safety standards, making it safe for installation in air-handling spaces. Additionally, with a tight bend radius of 20D (long-term) and 10D (short-term), the cable supports flexible routing through compact or complex conduit paths without compromising signal integrity.\n\nDesigned for durability, it features a spiral stainless steel armor layer that delivers exceptional protection against crushing forces and rodent damage. Inside, reinforced Kevlar yarn (4000D inner + 6000D outer) enhances tensile strength, making it ideal for demanding pull conditions.\n\nFeatures:\n\u2022 250 Foot Reel\n\u2022 Singlemode\n\u2022 12 Strand\n\u2022 Multimode OM4\n\u2022 12 Strand\n\u2022 SUS202 Stainless Steel Armor\n\u2022 Tight Buffer\n\u2022 Bend Insensitive G657A2\n\u2022 Indoor/Outdoor Plenum Rated\n\u2022 UV-Resistant\n\u2022 6.8mm outer diameter\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "1315,99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1q",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "China",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "#REF!",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "987.5",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044094",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1476,
      "display_name": " SM12L-MM12L-A2M4-IOPY-1000 ",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/sm12l-mm12l-a2m4-iopy-1000-1476",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/sm12l-mm12l-a2m4-iopy-1000-1476",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEV+2NhQlgAARX7anVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEV+2NhQlgAARX7anVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAEAAElEQVR42oT9a6xlW3Yeho1vzLX23ufUqapb9923yX6TTbZFUqRoRbbsWIqdKEIcy9EjB...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAEAAElEQVR42qT9aaw1WZYdhq11zonhzm/6psyssUeyqWaT3ebQnCnYAEl4ECBQEpo2LRMyT...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAABJFElEQVR42sW9aaxl2XUe9q2995nv9OZ6NXX1yGaTbJFUkxQpUlQkO7IjxzAQD3BkOI4dO...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": " SM12L-MM12L-A2M4-IOPY-1000 ",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        13,
        "Fiber Optic Bulk Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 7999.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1441
      ],
      "product_variant_id": [
        1441,
        " SM12L-MM12L-A2M4-IOPY-1000 "
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a09,199.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "24 Strand 1,000FT (12-SM + 12-MM OM4) space saving \ncomposite Stainless Steel Armored I/O Water Blocking OFCP Plenum fiber\n\nThe SM12L-MM12L-A2M4-IOPY offers a smarter, more efficient way to deploy fiber by combining 12 Singlemode (G657.A2) and 12 Multimode (OM4) strands in a single armored cable\u2014allowing you to run both modes at once and eliminate the need for multiple pulls. \n\nA built-in water-blocking system with multiple yarns safeguards against moisture ingress, ensuring long-term performance even in challenging environments. Engineered to withstand extreme temperatures from -15\u00b0C to +60\u00b0C, this cable is ready for tough conditions. Its plenum-rated OFCP outer jacket meets stringent fire and smoke safety standards, making it safe for installation in air-handling spaces. Additionally, with a tight bend radius of 20D (long-term) and 10D (short-term), the cable supports flexible routing through compact or complex conduit paths without compromising signal integrity.\n\nDesigned for durability, it features a spiral stainless steel armor layer that delivers exceptional protection against crushing forces and rodent damage. Inside, reinforced Kevlar yarn (4000D inner + 6000D outer) enhances tensile strength, making it ideal for demanding pull conditions.\n\nFeatures:\n\u2022 1000 Foot Reel\n\u2022 Singlemode\n\u2022 12 Strand\n\u2022 Multimode OM4\n\u2022 12 Strand\n\u2022 SUS202 Stainless Steel Armor\n\u2022 Tight Buffer\n\u2022 Bend Insensitive G657A2\n\u2022 Indoor/Outdoor Plenum Rated\n\u2022 UV-Resistant\n\u2022 6.8mm outer diameter\n\u2022 6.0mm outer diameter\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "5250.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1q",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "China",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "#REF!",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "3950",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044117",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1475,
      "display_name": " SM12L-MM12L-A2M4-IOPY-500 ",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/sm12l-mm12l-a2m4-iopy-500-1475",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/sm12l-mm12l-a2m4-iopy-500-1475",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEV+2NhQlgAARX7anVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEV+2NhQlgAARX7anVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAEAAElEQVR42oT9a6xlW3Yeho1vzLX23ufUqapb9923yX6TTbZFUqRoRbbsWIqdKEIcy9EjB...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAEAAElEQVR42qT9aaw1WZYdhq11zonhzm/6psyssUeyqWaT3ebQnCnYAEl4ECBQEpo2LRMyT...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAABJFElEQVR42sW9aaxl2XUe9q2995nv9OZ6NXX1yGaTbJFUkxQpUlQkO7IjxzAQD3BkOI4dO...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": " SM12L-MM12L-A2M4-IOPY-500 ",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        13,
        "Fiber Optic Bulk Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 3499.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1440
      ],
      "product_variant_id": [
        1440,
        " SM12L-MM12L-A2M4-IOPY-500 "
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a04,024.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "24 Strand 500FT (12-SM + 12-MM OM4) space saving \ncomposite Stainless Steel Armored I/O Water Blocking OFCP Plenum fiber\n\nThe SM12L-MM12L-A2M4-IOPY offers a smarter, more efficient way to deploy fiber by combining 12 Singlemode (G657.A2) and 12 Multimode (OM4) strands in a single armored cable\u2014allowing you to run both modes at once and eliminate the need for multiple pulls. \n\nA built-in water-blocking system with multiple yarns safeguards against moisture ingress, ensuring long-term performance even in challenging environments. Engineered to withstand extreme temperatures from -15\u00b0C to +60\u00b0C, this cable is ready for tough conditions. Its plenum-rated OFCP outer jacket meets stringent fire and smoke safety standards, making it safe for installation in air-handling spaces. Additionally, with a tight bend radius of 20D (long-term) and 10D (short-term), the cable supports flexible routing through compact or complex conduit paths without compromising signal integrity.\n\nDesigned for durability, it features a spiral stainless steel armor layer that delivers exceptional protection against crushing forces and rodent damage. Inside, reinforced Kevlar yarn (4000D inner + 6000D outer) enhances tensile strength, making it ideal for demanding pull conditions.\n\nFeatures:\n\u2022 500 Foot Reel\n\u2022 Singlemode\n\u2022 12 Strand\n\u2022 Multimode OM4\n\u2022 12 Strand\n\u2022 SUS202 Stainless Steel Armor\n\u2022 Tight Buffer\n\u2022 Bend Insensitive G657A2\n\u2022 Indoor/Outdoor Plenum Rated\n\u2022 UV-Resistant\n\u2022 6.8mm outer diameter\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "2599.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1q",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "China",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "#REF!",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "1975",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044100",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1530,
      "display_name": "CAMOSPLICE-432",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/camosplice-432-1530",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/camosplice-432-1530",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "/9j/4AAQSkZJRgABAQEA3ADcAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_1024": "/9j/4AAQSkZJRgABAQEA3ADcAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_512": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_256": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_128": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "CAMOSPLICE-432",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        21,
        "Cabling Splicing Equipment"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 4999,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1495
      ],
      "product_variant_id": [
        1495,
        "CAMOSPLICE-432"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a05,748.85 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "P2P Fusion CamoSplicer \u2013 Rugged Fusion Splicer for Stainless Steel \nArmored Fiber | Tactical Camouflage Kit\n\nThe P2P Fusion CamoSplicer is a next-generation,\ncompact, and ruggedized optical fusion splicing system purpose-built for demanding field environments and engineered to deliver high-performance, low-loss fiber connections\u2014especially when working with P2P stainless steel armored bulk fiber cables. Designed for tactical-grade reliability and installer-friendly operation, this camo-style splicer is ideal for telco contractors, security infrastructure teams, enterprise networks, and emergency restoration crews requiring fusion-grade accuracy and durability under pressure.\n\nUnlike standard benchtop splicers, the CamoSplicer is field-ready, featuring a dustproof, water-resistant, and shock-resistant housing, paired with an ultra-durable camouflage tactical case for harsh job sites. It offers multiple fusion and heating modes, giving installers flexibility to fine-tune settings based on fiber type, splice sleeve length, or environmental factors. Its high-precision ceramic V-groove ensures precise alignment and consistent core-to-core splices, even with G657.A2 bend-insensitive fibers and tighter armored buffers.\n\nThis fusion splicer is especially well-matched with P2P stainless steel armored fiber cables, thanks to its stable fiber loading design and auto-environment compensation system, which guarantees consistently low splice loss regardless of temperature or field conditions. The intuitive touchscreen interface makes setup and operation simple, while the dual-directional splice feature maximizes efficiency. A modular, high-capacity lithium-ion battery enables hours of uninterrupted use\u2014critical for multi-splice armored runs in the field.\n\nWhether you're splicing 6-strand tight-buffered SM cable in a junction box or prepping drop cables for high-density panels, the P2P CamoSplicer provides unmatched durability, mobility, and splicing performance in a lightweight, tactical-grade package.\n\nFeatures:\n\u2022 Optimized for P2P stainless steel\n\u2022 armored fiber\n\u2022 Low splice loss on G657.A2 and tight-buffered assemblies\n\u2022 Compact, lightweight, tactical design with camo carrying case\n\u2022 Dustproof, waterproof, shockproof\u2014engineered for harsh conditions\n\u2022 Touchscreen interface with simple, icon-based operation\n\u2022 Dual-directional fusion for rapid deployment workflows\n\u2022 Multiple fusion/heating modes support various sleeve sizes and environments\n\u2022 High-precision ceramic V-groove ensures perfect fiber alignment\n\u2022 Long-lasting lithium-ion battery supports all-day splicing",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "3750",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1YjVzesxiIg7hqiZAxiag0YS_P7OjGY4k",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "China",
      "x_studio_width_inches": "10\"",
      "x_studio_weight_lbs": "18lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "2700",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "17\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044353",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "1 Year",
      "x_studio_length_available": false
    },
    {
      "id": 1488,
      "display_name": "MM12T-M3-PL-1000",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/mm12t-m3-pl-1000-1488",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/mm12t-m3-pl-1000-1488",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABgkAAASlCAYAAACStTnVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEu2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94c...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAMUCAYAAAAi/VWAAAEAAElEQVR42uz9a5MjSZIlih1VMwciMrP6MTs73PvivXtJCvmB////UEi5d0V2pqe7MiMAd...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAGKCAYAAAB6u/nZAAEAAElEQVR42uz9WXckSXLnif5EVc18wxKRSy2sIbub7GW2nn6Ye+ZlHu73/wL33Hvm9AybS...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAYAAAC7ICzVAADTa0lEQVR42uz9ebTs51nfiX7e4TdV1Z7OJB2NliXbki0bz8bY0AwBArFJAoEESEjIQEzCv...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAABjCAYAAABT7gjnAAA8nElEQVR42u29Z5Cl2Xnf9zvhDTd17unJm8NsALCLwCUAJjCABChBEkWVZFFkFUmFsl2ST...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "MM12T-M3-PL-1000",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        13,
        "Fiber Optic Bulk Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 5899.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1453
      ],
      "product_variant_id": [
        1453,
        "MM12T-M3-PL-1000"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": true,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a06,784.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "12 Strand 1000FT Stainless Steel Armored OM3 50/125 Tight \nBuffer 900u  Aqua 8.0mm OD\n\nThe Point 2 Point 12-Strand OM3 Multimode Fiber Cable is a \nhigh-performance solution designed for speed, durability, and safety. Featuring six laser-optimized OM3 50/125\u00b5m fibers, this tight-buffered fiber optic cable delivers outstanding performance in mission-critical indoor installations. \n\nWith passivated stainless steel spiral tube armor under a plenum-rated OFNP jacket, this cable ensures long-lasting protection in environments prone to crushing,and  rodents.\n\nUnlike conventional cables, this design includes 900\u00b5m tight buffer construction for quick, easy direct terminations\u2014without fan-out kits\u2014saving time and simplifying installations. With its compact 8.0mm OD and the cable offers unmatched reliability in air-handling plenums, riser systems, indoor ducts.\n\nFeatures:\n\u2022 1000 Foot Reel\n\u2022 Multimode OM3\n\u2022 12 Strand\n\u2022 SUS202 Stainless Steel Armor\n\u2022 Tight Buffer  900\u00b5m\n\u2022 Jacket Color Aqua\n\u2022 Plenum Rated\n\u2022 5.5mm outer diameter\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "3960.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "68lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "2970",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044209",
      "x_studio_ship_ups_or_freight": "UPS and/or Freight",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1486,
      "display_name": "MM12T-M3-PL-250",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/mm12t-m3-pl-250-1486",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/mm12t-m3-pl-250-1486",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABgkAAASlCAYAAACStTnVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEu2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94c...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAMUCAYAAAAi/VWAAAEAAElEQVR42uz9eZckyZHtB/5EVM3cIyIza8fSDaBfL3xN9uPyeIbk4Qx5yDPfrL8Xh8OZO...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAGKCAYAAAB6u/nZAAEAAElEQVR42uz96ZMk2XXmjf3u4h5LrpWVtXfXXtU70A2A2AliI7iAAAmQBMihyOG8Go7Mp...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAYAAAC7ICzVAADatklEQVR42uz9d5hlWVreif7W2uZ4F96lz8qsyvLeV/tuWgiENBqNkEFuEEZXEmaGO48Eu...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAABjCAYAAABT7gjnAAA+E0lEQVR42u29eZRk133f97n3vvfq1dr7dPfM9OwzAGaAwU6Aq0iKIglJtDaSkUmKkuPEd...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "MM12T-M3-PL-250",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        13,
        "Fiber Optic Bulk Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 1499.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1451
      ],
      "product_variant_id": [
        1451,
        "MM12T-M3-PL-250"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": true,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a01,724.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "12 Strand 250FT Stainless Steel Armored OM3 50/125 Tight \nBuffer 900u  Aqua 8.0mm OD\n\nThe Point 2 Point 12-Strand OM3 Multimode Fiber Cable is a \nhigh-performance solution designed for speed, durability, and safety. Featuring six laser-optimized OM3 50/125\u00b5m fibers, this tight-buffered fiber optic cable delivers outstanding performance in mission-critical indoor installations. \n\nWith passivated stainless steel spiral tube armor under a plenum-rated OFNP jacket, this cable ensures long-lasting protection in environments prone to crushing,and  rodents.\n\nUnlike conventional cables, this design includes 900\u00b5m tight buffer construction for quick, easy direct terminations\u2014without fan-out kits\u2014saving time and simplifying installations. With its compact 8.0mm OD and the cable offers unmatched reliability in air-handling plenums, riser systems, indoor ducts.\n\nFeatures:\n\u2022 250 Foot Reel\n\u2022 Multimode OM3\n\u2022 12 Strand\n\u2022 SUS202 Stainless Steel Armor\n\u2022 Tight Buffer  900\u00b5m\n\u2022 Jacket Color Aqua\n\u2022 Plenum Rated\n\u2022 5.5mm outer diameter\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "989.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "19lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "742.5",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044315",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1487,
      "display_name": "MM12T-M3-PL-500",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/mm12t-m3-pl-500-1487",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/mm12t-m3-pl-500-1487",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABgkAAASlCAYAAACStTnVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEu2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94c...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAMUCAYAAAAi/VWAAAEAAElEQVR42uz92ZYcyY4liG5ARNXMOcQZcqqszl7dD/flvtz//51eq6tXV1aec4Kkm5mqi...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAGKCAYAAAB6u/nZAAEAAElEQVR42uz955MlSbLlB/7UzMmlwTIrq6r7MfTjZIB5O8AAMjKyRGT/a3zc/bIjgxFgZ...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAYAAAC7ICzVAADbfUlEQVR42uz9ebRl113fi37mnKvbzWnqVKcqqdRasmRbtsDGvXGHJZvG8SDBvjaGhMALk...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAABjCAYAAABT7gjnAAA/O0lEQVR42u29d5Bl133f+Tnh3vtS5+7JM8BEAINIEIkERFKUKMlLUaRdtFSSocAqk1xaL...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "MM12T-M3-PL-500",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        13,
        "Fiber Optic Bulk Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 2799.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1452
      ],
      "product_variant_id": [
        1452,
        "MM12T-M3-PL-500"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": true,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a03,219.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "12 Strand 500FT Stainless Steel Armored OM3 50/125 Tight \nBuffer 900u  Aqua 8.0mm OD\n\nThe Point 2 Point 12-Strand OM3 Multimode Fiber Cable is a \nhigh-performance solution designed for speed, durability, and safety. Featuring six laser-optimized OM3 50/125\u00b5m fibers, this tight-buffered fiber optic cable delivers outstanding performance in mission-critical indoor installations. \n\nWith passivated stainless steel spiral tube armor under a plenum-rated OFNP jacket, this cable ensures long-lasting protection in environments prone to crushing,and  rodents.\n\nUnlike conventional cables, this design includes 900\u00b5m tight buffer construction for quick, easy direct terminations\u2014without fan-out kits\u2014saving time and simplifying installations. With its compact 8.0mm OD and the cable offers unmatched reliability in air-handling plenums, riser systems, indoor ducts.\n\nFeatures:\n\u2022 500 Foot Reel\n\u2022 Multimode OM3\n\u2022 12 Strand\n\u2022 SUS202 Stainless Steel Armor\n\u2022 Tight Buffer  900\u00b5m\n\u2022 Jacket Color Aqua\n\u2022 Plenum Rated\n\u2022 5.5mm outer diameter\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "1980.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "35lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "1485",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044322",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1479,
      "display_name": "MM4T-M3-TAC-C5.5-1000",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/mm4t-m3-tac-c55-1000-1479",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/mm4t-m3-tac-c55-1000-1479",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "/9j/4AAQSkZJRgABAQEAwADAAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_1024": "/9j/4AAQSkZJRgABAQEAwADAAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_512": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_256": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_128": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "MM4T-M3-TAC-C5.5-1000",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        13,
        "Fiber Optic Bulk Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 2199.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1444
      ],
      "product_variant_id": [
        1444,
        "MM4T-M3-TAC-C5.5-1000"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a02,529.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "4  Core MM OM3-300 1000FT Stainless Steel Armored and \nBRAID reinforcement  Tight Buffer 900u  Polyurethane  Jacket 5.5mm\n\nDeliver high-speed data and laser-optimized performance with superior protection using the Point 2 Point 4-Core OM3-300 Multimode Bulk Fiber Cable. \n\nEach fiber is 900\u00b5m tight buffered, allowing for quick direct termination without fan-out kits, saving time and labor in the field. The polyurethane (PU) outer jacket is highly resistant to abrasions, chemicals, and physical abuse, making it ideal for both indoor and outdoor use. Engineered to withstand extreme conditions, this cable performs in temperatures from -20\u00b0C to +60\u00b0C and handles long-term bends at 10\u00d7 diameter.\n\nBuilt with passivated stainless steel spiral armor and an additional braid reinforcement layer, this fiber cable offers maximum mechanical strength while maintaining a compact 5.5mm outer diameter\u2014perfect for dense cable trays, rugged field environments, industrial automation, and secure IT infrastructure.\n\nFeatures:\n\u2022 1000 Foot Reel\n\u2022 Multimode OM3\n\u2022 4 Strand\n\u2022 Stainless Steel Armor\n\u2022 Tight Buffer 900\u00b5m\n\u2022 black polyurethane jacket\n\u2022 5.5mm outer diameter\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "1549.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1xstQVUY7zWvvGfHGBBdjnnQhXTOgZi8O",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "35lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "1160",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044148",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1477,
      "display_name": "MM4T-M3-TAC-C5.5-250",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/mm4t-m3-tac-c55-250-1477",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/mm4t-m3-tac-c55-250-1477",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "/9j/4AAQSkZJRgABAQEAwADAAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_1024": "/9j/4AAQSkZJRgABAQEAwADAAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_512": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_256": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_128": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "MM4T-M3-TAC-C5.5-250",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        13,
        "Fiber Optic Bulk Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 599.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1442
      ],
      "product_variant_id": [
        1442,
        "MM4T-M3-TAC-C5.5-250"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a0689.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "4  Core MM OM3-250 250FT Stainless Steel Armored and \nBRAID reinforcement  Tight Buffer 900u Polyurethane  Jacket 5.5mm\n\nDeliver high-speed data and laser-optimized performance with superior protection using the Point 2 Point 4-Core OM3-300 Multimode Bulk Fiber Cable. \n\nEach fiber is 900\u00b5m tight buffered, allowing for quick direct termination without fan-out kits, saving time and labor in the field. The polyurethane (PU) outer jacket is highly resistant to abrasions, chemicals, and physical abuse, making it ideal for both indoor and outdoor use. Engineered to withstand extreme conditions, this cable performs in temperatures from -20\u00b0C to +60\u00b0C and handles long-term bends at 10\u00d7 diameter.\n\nBuilt with passivated stainless steel spiral armor and an additional braid reinforcement layer, this fiber cable offers maximum mechanical strength while maintaining a compact 5.5mm outer diameter\u2014perfect for dense cable trays, rugged field environments, industrial automation, and secure IT infrastructure.\n\nFeatures:\n\u2022 250 Foot Reel\n\u2022 Multimode OM3\n\u2022 4 Strand\n\u2022 Stainless Steel Armor\n\u2022 Tight Buffer 900\u00b5m\n\u2022 black polyurethane jacket\n\u2022 5.5mm outer diameter\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "385.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1xstQVUY7zWvvGfHGBBdjnnQhXTOgZi8O",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "12lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "290",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044124",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1478,
      "display_name": "MM4T-M3-TAC-C5.5-500",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/mm4t-m3-tac-c55-500-1478",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/mm4t-m3-tac-c55-500-1478",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAYAAAB/HSuDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAP+lS...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAYAAAB/HSuDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAP+lS...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAEAAElEQVR42uz9V7ClWZbfh/22+cwx19/0meXb91hiMBwMBIwCgAQTMGJIpEQSUuhZ0oNCD...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAEAAElEQVR42uz915NtW5rdh/3m8mt7n/6Ye64p012O3dUG7QEIIEAKIEAhIJBgAJQgISTqg...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAABhXklEQVR42u39d3Sl2Xneif72/tKJOMgZBVShQueqTmw22UxqSjKDRCqQlERRtq9kyzPX9...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "MM4T-M3-TAC-C5.5-500",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        13,
        "Fiber Optic Bulk Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 1099.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1443
      ],
      "product_variant_id": [
        1443,
        "MM4T-M3-TAC-C5.5-500"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a01,264.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "4  Core MM OM3-300 500FT Stainless Steel Armored and \nBRAID reinforcement  Tight Buffer 900u Polyurethane  Jacket 5.5mm\n\nDeliver high-speed data and laser-optimized performance with superior protection using the Point 2 Point 4-Core OM3-300 Multimode Bulk Fiber Cable. \n\nEach fiber is 900\u00b5m tight buffered, allowing for quick direct termination without fan-out kits, saving time and labor in the field. The polyurethane (PU) outer jacket is highly resistant to abrasions, chemicals, and physical abuse, making it ideal for both indoor and outdoor use. Engineered to withstand extreme conditions, this cable performs in temperatures from -20\u00b0C to +60\u00b0C and handles long-term bends at 10\u00d7 diameter.\n\nBuilt with passivated stainless steel spiral armor and an additional braid reinforcement layer, this fiber cable offers maximum mechanical strength while maintaining a compact 5.5mm outer diameter\u2014perfect for dense cable trays, rugged field environments, industrial automation, and secure IT infrastructure.\n\nFeatures:\n\u2022 500 Foot Reel\n\u2022 Multimode OM3\n\u2022 4 Strand\n\u2022 Stainless Steel Armor\n\u2022 Tight Buffer 900\u00b5m\n\u2022 black polyurethane jacket\n\u2022 5.5mm outer diameter\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "775.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1xstQVUY7zWvvGfHGBBdjnnQhXTOgZi8O",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "20lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "580",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044131",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1485,
      "display_name": "MM6T-M3-IOPA-1000",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/mm6t-m3-iopa-1000-1485",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/mm6t-m3-iopa-1000-1485",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABgkAAASlCAYAAACStTnVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEu2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94c...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAMUCAYAAAAi/VWAAAEAAElEQVR42uz9a5MjSZIlih1VMwciMrP6MTs73PvivXtJCvmB////UEi5d0V2pqe7MiMAd...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAGKCAYAAAB6u/nZAAEAAElEQVR42uz9WXckSXLnif5EVc18wxKRSy2sIbub7GW2nn6Ye+ZlHu73/wL33Hvm9AybS...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAYAAAC7ICzVAADTa0lEQVR42uz9ebTs51nfiX7e4TdV1Z7OJB2NliXbki0bz8bY0AwBArFJAoEESEjIQEzCv...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAABjCAYAAABT7gjnAAA8nElEQVR42u29Z5Cl2Xnf9zvhDTd17unJm8NsALCLwCUAJjCABChBEkWVZFFkFUmFsl2ST...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "MM6T-M3-IOPA-1000",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        13,
        "Fiber Optic Bulk Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 1599.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1450
      ],
      "product_variant_id": [
        1450,
        "MM6T-M3-IOPA-1000"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": true,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a01,839.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "6 Strand 1000FT Stainless Steel Armor OM3 50/125 Tight \nBuffer 900u  Indoor/Outdoor OFNP Plenum Aqua 6.0mm OD\n\nThe Point 2 Point 6-Strand OM3 Multimode Fiber Cable is a \nhigh-performance solution designed for speed, durability, and safety. Featuring six laser-optimized OM3 50/125\u00b5m fibers, this tight-buffered fiber optic cable delivers outstanding performance in mission-critical indoor and outdoor installations. \n\nWith passivated stainless steel spiral tube armor under a plenum-rated OFNP jacket, this cable ensures long-lasting protection in environments prone to crushing, rodents, or UV exposure.\n\nUnlike conventional cables, this design includes 900\u00b5m tight buffer construction for quick, easy direct terminations\u2014without fan-out kits\u2014saving time and simplifying installations. With its compact 6.0mm OD and built-in water-blocking yarns, the cable offers unmatched reliability in air-handling plenums, underground conduits, riser systems, and outdoor ducts.\n\nFeatures:\n\u2022 1000 Foot Reel\n\u2022 Multimode OM3\n\u2022 6 Strand\n\u2022 SUS202 Stainless Steel Armor\n\u2022 Tight Buffer  900\u00b5m\n\u2022 Jacket Color Aqua\n\u2022 Indoor/Outdoor Plenum Rated\n\u2022 Water blocking Yarn\n\u2022 5.5mm outer diameter\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "1075.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1kI5rgyk_uVwsDzQMra5iG_z8UvOTSBsl",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "45lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "1610",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044308",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1483,
      "display_name": "MM6T-M3-IOPA-250",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/mm6t-m3-iopa-250-1483",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/mm6t-m3-iopa-250-1483",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABgkAAASlCAYAAACStTnVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEu2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94c...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAMUCAYAAAAi/VWAAAEAAElEQVR42uz9eZckyZHtB/5EVM3cIyIza8fSDaBfL3xN9uPyeIbk4Qx5yDPfrL8Xh8OZO...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAGKCAYAAAB6u/nZAAEAAElEQVR42uz96ZMk2XXmjf3u4h5LrpWVtXfXXtU70A2A2AliI7iAAAmQBMihyOG8Go7Mp...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAYAAAC7ICzVAADatklEQVR42uz9d5hlWVreif7W2uZ4F96lz8qsyvLeV/tuWgiENBqNkEFuEEZXEmaGO48Eu...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAABjCAYAAABT7gjnAAA+E0lEQVR42u29eZRk133f97n3vvfq1dr7dPfM9OwzAGaAwU6Aq0iKIglJtDaSkUmKkuPEd...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "MM6T-M3-IOPA-250",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        13,
        "Fiber Optic Bulk Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 799.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1448
      ],
      "product_variant_id": [
        1448,
        "MM6T-M3-IOPA-250"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": true,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a0919.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "6 Strand 250FT Stainless Steel Armored OM3 50/125 Tight \nBuffer 900u Indoor/Outdoor OFNP Plenum Aqua 6.0mm OD\n\nThe Point 2 Point 6-Strand OM3 Multimode Fiber Cable is a \nhigh-performance solution designed for speed, durability, and safety. Featuring six laser-optimized OM3 50/125\u00b5m fibers, this tight-buffered fiber optic cable delivers outstanding performance in mission-critical indoor and outdoor installations. \n\nWith passivated stainless steel spiral tube armor under a plenum-rated OFNP jacket, this cable ensures long-lasting protection in environments prone to crushing, rodents, or UV exposure.\n\nUnlike conventional cables, this design includes 900\u00b5m tight buffer construction for quick, easy direct terminations\u2014without fan-out kits\u2014saving time and simplifying installations. With its compact 6.0mm OD and built-in water-blocking yarns, the cable offers unmatched reliability in air-handling plenums, underground conduits, riser systems, and outdoor ducts.\n\nFeatures:\n\u2022 250 Foot Reel\n\u2022 Multimode OM3\n\u2022 6 Strand\n\u2022 SUS202 Stainless Steel Armor\n\u2022 Tight Buffer  900\u00b5m\n\u2022 Jacket Color Aqua\n\u2022 Indoor/Outdoor Plenum Rated\n\u2022 Water blocking Yarn\n\u2022 5.5mm outer diameter\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "539.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1kI5rgyk_uVwsDzQMra5iG_z8UvOTSBsl",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "14lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "402.5",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044186",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1484,
      "display_name": "MM6T-M3-IOPA-500",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/mm6t-m3-iopa-500-1484",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/mm6t-m3-iopa-500-1484",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABgkAAASlCAYAAACStTnVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEu2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94c...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAMUCAYAAAAi/VWAAAEAAElEQVR42uz92ZYcyY4liG5ARNXMOcQZcqqszl7dD/flvtz//51eq6tXV1aec4Kkm5mqi...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAGKCAYAAAB6u/nZAAEAAElEQVR42uz955MlSbLlB/7UzMmlwTIrq6r7MfTjZIB5O8AAMjKyRGT/a3zc/bIjgxFgZ...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAYAAAC7ICzVAADbfUlEQVR42uz9ebRl113fi37mnKvbzWnqVKcqqdRasmRbtsDGvXGHJZvG8SDBvjaGhMALk...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAABjCAYAAABT7gjnAAA/O0lEQVR42u29d5Bl133f+Tnh3vtS5+7JM8BEAINIEIkERFKUKMlLUaRdtFSSocAqk1xaL...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "MM6T-M3-IOPA-500",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        13,
        "Fiber Optic Bulk Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 1599.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1449
      ],
      "product_variant_id": [
        1449,
        "MM6T-M3-IOPA-500"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": true,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a01,839.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "6 Strand 500FT Stainless Steel Armored OM3 50/125 Tight \nBuffer 900u Indoor/Outdoor OFNP Plenum Aqua 6.0mm OD\n\nThe Point 2 Point 6-Strand OM3 Multimode Fiber Cable is a \nhigh-performance solution designed for speed, durability, and safety. Featuring six laser-optimized OM3 50/125\u00b5m fibers, this tight-buffered fiber optic cable delivers outstanding performance in mission-critical indoor and outdoor installations. \n\nWith passivated stainless steel spiral tube armor under a plenum-rated OFNP jacket, this cable ensures long-lasting protection in environments prone to crushing, rodents, or UV exposure.\n\nUnlike conventional cables, this design includes 900\u00b5m tight buffer construction for quick, easy direct terminations\u2014without fan-out kits\u2014saving time and simplifying installations. With its compact 6.0mm OD and built-in water-blocking yarns, the cable offers unmatched reliability in air-handling plenums, underground conduits, riser systems, and outdoor ducts.\n\nFeatures:\n\u2022 500 Foot Reel\n\u2022 Multimode OM3\n\u2022 6 Strand\n\u2022 SUS202 Stainless Steel Armor\n\u2022 Tight Buffer  900\u00b5m\n\u2022 Jacket Color Aqua\n\u2022 Indoor/Outdoor Plenum Rated\n\u2022 Water blocking Yarn\n\u2022 5.5mm outer diameter\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "1075.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1kI5rgyk_uVwsDzQMra5iG_z8UvOTSBsl",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "24lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "805",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044193",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1482,
      "display_name": "MM6T-M4-IOPA-1000",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/mm6t-m4-iopa-1000-1482",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/mm6t-m4-iopa-1000-1482",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABgkAAASlCAYAAACStTnVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEu2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94c...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAMUCAYAAAAi/VWAAAEAAElEQVR42uz9a5MjSZIlih1VMwciMrP6MTs73PvivXtJCvmB////UEi5d0V2pqe7MiMAd...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAGKCAYAAAB6u/nZAAEAAElEQVR42uz9WXckSXLnif5EVc18wxKRSy2sIbub7GW2nn6Ye+ZlHu73/wL33Hvm9AybS...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAYAAAC7ICzVAADTa0lEQVR42uz9ebTs51nfiX7e4TdV1Z7OJB2NliXbki0bz8bY0AwBArFJAoEESEjIQEzCv...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAABjCAYAAABT7gjnAAA8nElEQVR42u29Z5Cl2Xnf9zvhDTd17unJm8NsALCLwCUAJjCABChBEkWVZFFkFUmFsl2ST...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "MM6T-M4-IOPA-1000",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        13,
        "Fiber Optic Bulk Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 3499.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1447
      ],
      "product_variant_id": [
        1447,
        "MM6T-M4-IOPA-1000"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": true,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a04,024.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "6 Strand 1000FT Stainless Steel Armored OM4 50/125 Tight \nBuffer 900u  Indoor/Outdoor OFCP Plenum Aqua 6.0mm OD\n\nThe 6-Strand OM4 Tight Buffered Multimode Fiber Cable is purpose-built for modern high-speed networks that demand flexibility, safety, and rugged durability. Engineered with passivated metallic cladding armor under a flame-retardant plenum-rated aqua jacket, this fiber cable offers elite protection for indoor and outdoor runs\u2014without sacrificing bend performance or install flexibility.\n\nWith a plenum-rated (OFCP) aqua PVC outer jacket, water-blocking yarn, and UV-resistant construction, this cable protects both your signal and your investment from end to end. Its compact 6.0mm OD makes it perfect for high-density routing, while aramid yarn strength members ensure long-term pull durability in demanding installation conditions.\n\nAt its core, this cable contains 6 strands of laser-optimized OM4 50/125\u00b5m multimode fiber, capable of supporting 10G, 40G, and 100G Ethernet with longer reach and lower attenuation than standard MMF. The tight-buffered 900\u00b5m construction allows for quick, direct connector terminations\u2014no fan-out kits needed\u2014saving time and labor in the field. Whether running through indoor risers, air-handling plenum spaces, or exposed conduit routes, this cable delivers proven performance in a single, easy-to-manage solution.\n\nFeatures:\n\u2022 1000 Foot Reel\n\u2022 Multimode OM4\n\u2022 6 Strand\n\u2022 SUS202 Stainless Steel Armor\n\u2022 Tight Buffer  900\u00b5m\n\u2022 Jacket Color Aqua\n\u2022 Indoor/Outdoor Plenum Rated\n\u2022 5.5mm outer diameter\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "2339.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1l4T1NKGTNRHLWg8EVb3JZshltMasqeMV",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "45lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "1750",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044179",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1480,
      "display_name": "MM6T-M4-IOPA-250",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/mm6t-m4-iopa-250-1480",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/mm6t-m4-iopa-250-1480",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABgkAAASlCAYAAACStTnVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEu2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94c...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAMUCAYAAAAi/VWAAAEAAElEQVR42uz9eZckyZHtB/5EVM3cIyIza8fSDaBfL3xN9uPyeIbk4Qx5yDPfrL8Xh8OZO...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAGKCAYAAAB6u/nZAAEAAElEQVR42uz96ZMk2XXmjf3u4h5LrpWVtXfXXtU70A2A2AliI7iAAAmQBMihyOG8Go7Mp...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAYAAAC7ICzVAADatklEQVR42uz9d5hlWVreif7W2uZ4F96lz8qsyvLeV/tuWgiENBqNkEFuEEZXEmaGO48Eu...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAABjCAYAAABT7gjnAAA+E0lEQVR42u29eZRk133f97n3vvfq1dr7dPfM9OwzAGaAwU6Aq0iKIglJtDaSkUmKkuPEd...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "MM6T-M4-IOPA-250",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        13,
        "Fiber Optic Bulk Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 799.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1445
      ],
      "product_variant_id": [
        1445,
        "MM6T-M4-IOPA-250"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": true,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a0919.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "6 Strand 250FT Stainless Steel Armored OM4 50/125 Tight \nBuffer 900u Bend Insensitive Indoor/Outdoor OFCP Plenum Aqua 6.0mm OD\n\nThe 6-Strand OM4 Tight Buffered Multimode Fiber Cable is purpose-built for modern high-speed networks that demand flexibility, safety, and rugged durability. Engineered with passivated metallic cladding armor under a flame-retardant plenum-rated aqua jacket, this fiber cable offers elite protection for indoor and outdoor runs\u2014without sacrificing bend performance or install flexibility.\n\nWith a plenum-rated (OFCP) aqua PVC outer jacket, water-blocking yarn, and UV-resistant construction, this cable protects both your signal and your investment from end to end. Its compact 6.0mm OD makes it perfect for high-density routing, while aramid yarn strength members ensure long-term pull durability in demanding installation conditions.\n\nAt its core, this cable contains 6 strands of laser-optimized OM4 50/125\u00b5m multimode fiber, capable of supporting 10G, 40G, and 100G Ethernet with longer reach and lower attenuation than standard MMF. The tight-buffered 900\u00b5m construction allows for quick, direct connector terminations\u2014no fan-out kits needed\u2014saving time and labor in the field. Whether running through indoor risers, air-handling plenum spaces, or exposed conduit routes, this cable delivers proven performance in a single, easy-to-manage solution.\n\nFeatures:\n\u2022 250 Foot Reel\n\u2022 Multimode OM4\n\u2022 6 Strand\n\u2022 SUS202 Stainless Steel Armor\n\u2022 Tight Buffer  900\u00b5m\n\u2022 Jacket Color Aqua\n\u2022 Indoor/Outdoor Plenum Rated\n\u2022 5.5mm outer diameter\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "584.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1l4T1NKGTNRHLWg8EVb3JZshltMasqeMV",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "14lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "437.5",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044155",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1481,
      "display_name": "MM6T-M4-IOPA-500",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/mm6t-m4-iopa-500-1481",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/mm6t-m4-iopa-500-1481",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABgkAAASlCAYAAACStTnVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEu2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94c...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAMUCAYAAAAi/VWAAAEAAElEQVR42uz92ZYcyY4liG5ARNXMOcQZcqqszl7dD/flvtz//51eq6tXV1aec4Kkm5mqi...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAGKCAYAAAB6u/nZAAEAAElEQVR42uz955MlSbLlB/7UzMmlwTIrq6r7MfTjZIB5O8AAMjKyRGT/a3zc/bIjgxFgZ...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAYAAAC7ICzVAADbfUlEQVR42uz9ebRl113fi37mnKvbzWnqVKcqqdRasmRbtsDGvXGHJZvG8SDBvjaGhMALk...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAABjCAYAAABT7gjnAAA/O0lEQVR42u29d5Bl133f+Tnh3vtS5+7JM8BEAINIEIkERFKUKMlLUaRdtFSSocAqk1xaL...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "MM6T-M4-IOPA-500",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        13,
        "Fiber Optic Bulk Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 1699.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1446
      ],
      "product_variant_id": [
        1446,
        "MM6T-M4-IOPA-500"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": true,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a01,954.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "6 Strand 500FT Stainless Steel Armored OM4 50/125 Tight \nBuffer 900u  Indoor/Outdoor OFCP Plenum Aqua 6.0mm OD\n\nThe 6-Strand OM4 Tight Buffered Multimode Fiber Cable is purpose-built for modern high-speed networks that demand flexibility, safety, and rugged durability. Engineered with passivated metallic cladding armor under a flame-retardant plenum-rated aqua jacket, this fiber cable offers elite protection for indoor and outdoor runs\u2014without sacrificing bend performance or install flexibility.\n\nWith a plenum-rated (OFCP) aqua PVC outer jacket, water-blocking yarn, and UV-resistant construction, this cable protects both your signal and your investment from end to end. Its compact 6.0mm OD makes it perfect for high-density routing, while aramid yarn strength members ensure long-term pull durability in demanding installation conditions.\n\nAt its core, this cable contains 6 strands of laser-optimized OM4 50/125\u00b5m multimode fiber, capable of supporting 10G, 40G, and 100G Ethernet with longer reach and lower attenuation than standard MMF. The tight-buffered 900\u00b5m construction allows for quick, direct connector terminations\u2014no fan-out kits needed\u2014saving time and labor in the field. Whether running through indoor risers, air-handling plenum spaces, or exposed conduit routes, this cable delivers proven performance in a single, easy-to-manage solution.\n\nFeatures:\n\u2022 500 Foot Reel\n\u2022 Multimode OM4\n\u2022 6 Strand\n\u2022 SUS202 Stainless Steel Armor\n\u2022 Tight Buffer  900\u00b5m\n\u2022 Jacket Color Aqua\n\u2022 Indoor/Outdoor Plenum Rated\n\u2022 5.5mm outer diameter\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "1159.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1l4T1NKGTNRHLWg8EVb3JZshltMasqeMV",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "24lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "875",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044162",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1520,
      "display_name": "NF-HDMI-AAOC2.1-010",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/nf-hdmi-aaoc21-010-1520",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/nf-hdmi-aaoc21-010-1520",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAARhCAYAAAC8tfd8AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAP+lS...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAAA6cAAAQACAYAAAAdoi+oAAEAAElEQVR42sz9ebxlZ1Umjj9rn3NvzZWkigQSMhGSEObIIJOAtgqKX8URbcWJZhLQdgIZR...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAdQAAAIACAYAAAA7YJ3IAAEAAElEQVR42uy9d5wlR3U2/Jyq6u4bJu1szqssrTIgEJgcDIhoCwcwNthgwH5NcHyNP2P8Y...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAOoAAAEACAYAAAC9POoeAAC120lEQVR42uy9d5hlZ3Xm+9s5nFypq7pb6m5lEJIASURhk2zwDNjGOGBfgonXj4cweK5hZ...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAHUAAACACAYAAAA1WyYWAAA8QUlEQVR42u29d7RcZ3n2/dt1Zk+f03WKzjmSLNuyZckF3HA3LWAgYMDBQBJsMLwJJbx5S...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "NF-HDMI-AAOC2.1-010",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        18,
        "HDMI ARMORED"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 199.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1485
      ],
      "product_variant_id": [
        1485,
        "NF-HDMI-AAOC2.1-010"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": true,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a0229.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "10 Meter Passivated Metallic Cladding\u00a0HDMI\u00a02.1 Type A - Type A. Active Optical Cable. Outer Diameter =5.8mm Black TPU Jacket (with protection caps on both ends)\n\nThe 10 Meter Passivated Metallic Cladding HDMI 2.1 Active Optical Cable (Type A to Type A) delivers exceptional 48 Gbps bandwidth over long distances with minimal signal loss, making it ideal for 8K/60Hz and 4K/120Hz professional AV installations. \n\nEngineered with a unique stainless steel passivated metallic cladding, this cable offers superior crush and rodent resistance, ensuring robust protection of the internal fiber core while maintaining an ultra-slim 5.8mm outer diameter. \n\nThe black TPU jacket adds flexibility and toughness for challenging environments, while integrated protection caps shield the connectors during transport and installation. \n\nDesigned for high-reliability performance in the field, this cable is a go-to solution for contractors demanding armored durability without bulk. A perfect choice for rack-to-rack HDMI extension in broadcast, live production, or AV-over-IP deployments.\n\nFeatures:\n\u2022 Passivated Metallic Cladding Armor: Superior protection against rodent bites, abrasion, and crush forces\n\u2022 Length: 10 Meters\n\u2022 Ultra-Slim 5.8mm OD; Smallest armored diameter in its class; easier conduit routing and installs\n\u2022 HDMI 2.1 Active Optical Cable (AOC); Reliable 48 Gbps data rate for uncompressed 8K/60 and 4K/120 video\n\u2022 Type A to Type A Connectors; Universally compatible with standard HDMI ports.\n\u2022 TPU Jacket: Flexible yet rugged for field durability\n\u2022 10 Meter Length\tIdeal for long-run applications without boosters or repeaters\n\u2022 Protection Caps on Both Ends; Prevent dust and connector damage during handling",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "129.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1QmMGtvgfB6kykP3X74leweUHOe",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "China",
      "x_studio_width_inches": "11\"",
      "x_studio_weight_lbs": "2lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "94",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "13\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634042571",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1521,
      "display_name": "NF-HDMI-AAOC2.1-050 \n",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/nf-hdmi-aaoc21-050-1521",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/nf-hdmi-aaoc21-050-1521",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAARhCAYAAAC8tfd8AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAP+lS...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAAA6cAAAQACAYAAAAdoi+oAAEAAElEQVR42sz9ebxlZ1Umjj9rn3NvzZWkigQSMhGSEObIIJOAtgqKX8URbcWJZhLQdgIZR...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAdQAAAIACAYAAAA7YJ3IAAEAAElEQVR42uy9d5wlR3U2/Jyq6u4bJu1szqssrTIgEJgcDIhoCwcwNthgwH5NcHyNP2P8Y...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAOoAAAEACAYAAAC9POoeAAC120lEQVR42uy9d5hlZ3Xm+9s5nFypq7pb6m5lEJIASURhk2zwDNjGOGBfgonXj4cweK5hZ...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAHUAAACACAYAAAA1WyYWAAA8QUlEQVR42u29d7RcZ3n2/dt1Zk+f03WKzjmSLNuyZckF3HA3LWAgYMDBQBJsMLwJJbx5S...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "NF-HDMI-AAOC2.1-050 \n",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        18,
        "HDMI ARMORED"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 499.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1486
      ],
      "product_variant_id": [
        1486,
        "NF-HDMI-AAOC2.1-050 \n"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": true,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a0574.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "50M HDMI 2.1 AOC, Type A-A, Armored, 5.8mm OD, TPU J\nacket, w/ Caps for Rugged AV Installs\n\n50 Meter Passivated Metallic Cladding HDMI 2.1 Type A - Type A Active Optical Cable on Tactical Reel\n\nThis 50-meter HDMI 2.1 Active Optical Cable is armored with stainless steel passivated metallic cladding and comes pre-loaded on a rugged tactical reel for mission-critical deployments in demanding environments. Designed to support full 48 Gbps data transmission (ideal for 8K/60Hz and 4K/120Hz video),\n\n This ultra-durable AOC cable combines the protection of stainless steel armor with a compact 5.8mm outer diameter, delivering best-in-class strength without sacrificing flexibility or installability. \n\nThe black TPU jacket resists abrasions, moisture, and impact\u2014perfect for mobile AV setups, remote production, OB trucks, and stage rigs. The tactical reel allows for easy transport, rapid deployment, and secure storage, giving installers an edge in speed and organization. \n\nProtective caps on both HDMI ends ensure clean, damage-free connectors. This is the ultimate long-run HDMI solution for AV professionals who demand both ruggedness and signal integrity in the field.\n\nFeatures:\n\u2022 Cable Type: HDMI 2.1 Active Optical Cable (AOC)\n\u2022 Connectors: Type A (Male) to Type A (Male)\n\u2022 Bandwidth: Up to 48 Gbps\n\u2022 Resolution Support: Up to 8K@60Hz / 4K@120Hz / HDR / eARC / HDCP 2.3\n\u2022 Cable Length: 50 meters\n\u2022 Outer Diameter: 5.8mm\n\u2022 Armor Material: Stainless Steel Passivated Metallic Cladding\n\u2022 Jacket Material: Black Thermoplastic Polyurethane (TPU)\n\u2022 Environmental: Crush-resistant, rodent-resistant, flexible\n\u2022 Connector Protection: Dust caps included on both ends",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "349.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1QmMGtvgfB6kykP3X74leweUHOe",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "China",
      "x_studio_width_inches": "11\"",
      "x_studio_weight_lbs": "10lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "263",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "13\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634042601",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1489,
      "display_name": "NFAP2-CA2-IOPY-LCULCU-0.5M",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/nfap2-ca2-iopy-lculcu-05m-1489",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/nfap2-ca2-iopy-lculcu-05m-1489",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEZ1mNhQlgAARnWanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEZ1mNhQlgAARnWanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAEAAElEQVR42uz9Wa9t2ZUeiH1jjDnXWrs559z+RktGsCeTykxlpposVCNbroItCLCBsmHD8...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAADS4ElEQVR42uz9ebRl6XUfhu29v+kMd773jTV2VQ/VE9CN7ga60cREAAIpUhItUrJlSZSWL...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAABCwElEQVR42uW9ebhc11Unusczn5qr7jzqXo225tGyHQ9J7ASHBMLY3SQBQtKh+SCP7ualo...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "NFAP2-CA2-IOPY-LCULCU-0.5M",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        27,
        "Fiber Optic Patch cable Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 12.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1454
      ],
      "product_variant_id": [
        1454,
        "NFAP2-CA2-IOPY-LCULCU-0.5M"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a014.94 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "0.5m Uniboot LC to LC SM/A2 3.0mm Plenum, Yellow Indoor/Outdoor \nOS2 Patch Cord with Stainless Steel Armor under jacket\n\nThe 0.5m LC/UPC Uniboot to LC/UPC Uniboot Singlemode \nOS2 G657.A2 Patch Cord is designed for high-density, high-reliability fiber optic environments where space, protection, and performance are critical. Built with a 3.0mm OFCP-rated yellow jacket, this patch cable is reinforced with passivated stainless steel spiral armor beneath the outer jacket, offering excellent resistance to crush, kink, rodent damage, and abrasion\u2014ideal for harsh indoor/outdoor, riser, or exposed cabinet installations.\n\nIts uniboot LC/UPC design minimizes cable footprint by combining two fibers into a single connector housing, reducing congestion in patch panels and improving airflow. \n\nThe tight bend radius G657.A2 fiber allows for flexible routing in compact pathways without compromising signal integrity. Perfect for enterprise data centers, telecom rooms, and tactical edge deployments, this armored patch cable eliminates the need for separate conduit or protective tubing\u2014saving space, time, and cost while delivering optical clarity with low insertion loss and high return loss.\n\nFeatures:\n\u2022 0.5m Length\n\u2022 LC/UPC Uniboot to\n\u2022 LC/UPC Uniboot\n\u2022 Singlemode OS2 G657.A2 Patch Cord\n\u2022 3.0mm OFCP-rated\n\u2022 yellow jacket\n\u2022 Passivated stainless steel spiral armor beneath the outer jacket\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "11.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1hgSUXXVP3dffnFARiOh7E1LjK5lU4xun",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "11\"",
      "x_studio_weight_lbs": ".006 LBS",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "8.55",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "13\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634041826",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1490,
      "display_name": "NFAP2-CA2-IOPY-LCULCU-001M",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/nfap2-ca2-iopy-lculcu-001m-1490",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/nfap2-ca2-iopy-lculcu-001m-1490",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEZ1mNhQlgAARnWanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEZ1mNhQlgAARnWanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAEAAElEQVR42uz9Wa9t2ZUeiH1jjDnXWrs559z+RktGsCeTykxlpposVCNbroItCLCBsmHD8...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAADS4ElEQVR42uz9ebRl6XUfhu29v+kMd773jTV2VQ/VE9CN7ga60cREAAIpUhItUrJlSZSWL...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAABCwElEQVR42uW9ebhc11Unusczn5qr7jzqXo225tGyHQ9J7ASHBMLY3SQBQtKh+SCP7ualo...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "NFAP2-CA2-IOPY-LCULCU-001M",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        27,
        "Fiber Optic Patch cable Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 14.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1455
      ],
      "product_variant_id": [
        1455,
        "NFAP2-CA2-IOPY-LCULCU-001M"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a017.24 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "1.0m Uniboot LC to LC SM/A2 3.0mm Plenum, Yellow Indoor/Outdoor \nOS2 Patch Cord with Passivated Metallic Armor under jacket\n\nThe 1.0m LC/UPC Uniboot to LC/UPC Uniboot Singlemode \nOS2 G657.A2 Patch Cord is designed for high-density, high-reliability fiber optic environments where space, protection, and performance are critical. Built with a 3.0mm OFCP-rated yellow jacket, this patch cable is reinforced with passivated stainless steel spiral armor beneath the outer jacket, offering excellent resistance to crush, kink, rodent damage, and abrasion\u2014ideal for harsh indoor/outdoor, riser, or exposed cabinet installations.\n\nIts uniboot LC/UPC design minimizes cable footprint by combining two fibers into a single connector housing, reducing congestion in patch panels and improving airflow. \n\nThe tight bend radius G657.A2 fiber allows for flexible routing in compact pathways without compromising signal integrity. Perfect for enterprise data centers, telecom rooms, and tactical edge deployments, this armored patch cable eliminates the need for separate conduit or protective tubing\u2014saving space, time, and cost while delivering optical clarity with low insertion loss and high return loss.\n\nFeatures:\n\u2022 1.0m Length\n\u2022 LC/UPC Uniboot to\n\u2022 LC/UPC Uniboot\n\u2022 Singlemode OS2 G657.A2 Patch Cord\n\u2022 3.0mm OFCP-rated\n\u2022 yellow jacket\n\u2022 Passivated stainless steel spiral armor beneath the outer jacket\n\u2022 Smallest outer diameter armored patch cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "13.52",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1hgSUXXVP3dffnFARiOh7E1LjK5lU4xun",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "11\"",
      "x_studio_weight_lbs": ".012 LBS",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "9.47",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "13\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634041833",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1491,
      "display_name": "NFAP2-CA2-IOPY-LCULCU-002M",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/nfap2-ca2-iopy-lculcu-002m-1491",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/nfap2-ca2-iopy-lculcu-002m-1491",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEZ1mNhQlgAARnWanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEZ1mNhQlgAARnWanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAEAAElEQVR42uz9Wa9t2ZUeiH1jjDnXWrs559z+RktGsCeTykxlpposVCNbroItCLCBsmHD8...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAADS4ElEQVR42uz9ebRl6XUfhu29v+kMd773jTV2VQ/VE9CN7ga60cREAAIpUhItUrJlSZSWL...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAABCwElEQVR42uW9ebhc11Unusczn5qr7jzqXo225tGyHQ9J7ASHBMLY3SQBQtKh+SCP7ualo...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "NFAP2-CA2-IOPY-LCULCU-002M",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        27,
        "Fiber Optic Patch cable Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 19.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1456
      ],
      "product_variant_id": [
        1456,
        "NFAP2-CA2-IOPY-LCULCU-002M"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a022.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "2m Uniboot LC to LC SM/A2 3.0mm Plenum, Yellow Indoor/Outdoor \nOS2 Patch Cord with Passivated Metallic Armor under jacket\n\nThe 2m LC/UPC Uniboot to LC/UPC Uniboot Singlemode \nOS2 G657.A2 Patch Cord is designed for high-density, high-reliability fiber optic environments where space, protection, and performance are critical. Built with a 3.0mm OFCP-rated yellow jacket, this patch cable is reinforced with passivated stainless steel spiral armor beneath the outer jacket, offering excellent resistance to crush, kink, rodent damage, and abrasion\u2014ideal for harsh indoor/outdoor, riser, or exposed cabinet installations.\n\nIts uniboot LC/UPC design minimizes cable footprint by combining two fibers into a single connector housing, reducing congestion in patch panels and improving airflow. \n\nThe tight bend radius G657.A2 fiber allows for flexible routing in compact pathways without compromising signal integrity. Perfect for enterprise data centers, telecom rooms, and tactical edge deployments, this armored patch cable eliminates the need for separate conduit or protective tubing\u2014saving space, time, and cost while delivering optical clarity with low insertion loss and high return loss.\n\nFeatures:\n\u2022 2m Length\n\u2022 LC/UPC Uniboot to\n\u2022 LC/UPC Uniboot\n\u2022 Singlemode OS2 G657.A2 Patch Cord\n\u2022 3.0mm OFCP-rated\n\u2022 yellow jacket\n\u2022 Passivated stainless steel spiral armor beneath the outer jacket\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "15.75",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1hgSUXXVP3dffnFARiOh7E1LjK5lU4xun",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "11\"",
      "x_studio_weight_lbs": ".024 LBS",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "11.03",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "13\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634041840",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1492,
      "display_name": "NFAP2-CA2-IOPY-LCULCU-003M",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/nfap2-ca2-iopy-lculcu-003m-1492",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/nfap2-ca2-iopy-lculcu-003m-1492",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEZ1mNhQlgAARnWanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEZ1mNhQlgAARnWanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAEAAElEQVR42uz9Wa9t2ZUeiH1jjDnXWrs559z+RktGsCeTykxlpposVCNbroItCLCBsmHD8...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAADS4ElEQVR42uz9ebRl6XUfhu29v+kMd773jTV2VQ/VE9CN7ga60cREAAIpUhItUrJlSZSWL...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAABCwElEQVR42uW9ebhc11Unusczn5qr7jzqXo225tGyHQ9J7ASHBMLY3SQBQtKh+SCP7ualo...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "NFAP2-CA2-IOPY-LCULCU-003M",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        27,
        "Fiber Optic Patch cable Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 21.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1457
      ],
      "product_variant_id": [
        1457,
        "NFAP2-CA2-IOPY-LCULCU-003M"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a025.29 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "3m Uniboot LC to LC SM/A2 3.0mm Plenum, Yellow Indoor/Outdoor \nOS2 Patch Cord with Passivated Metallic Armor under jacket\n\nThe 3m LC/UPC Uniboot to LC/UPC Uniboot Singlemode \nOS2 G657.A2 Patch Cord is designed for high-density, high-reliability fiber optic environments where space, protection, and performance are critical. Built with a 3.0mm OFCP-rated yellow jacket, this patch cable is reinforced with passivated stainless steel spiral armor beneath the outer jacket, offering excellent resistance to crush, kink, rodent damage, and abrasion\u2014ideal for harsh indoor/outdoor, riser, or exposed cabinet installations.\n\nIts uniboot LC/UPC design minimizes cable footprint by combining two fibers into a single connector housing, reducing congestion in patch panels and improving airflow. \n\nThe tight bend radius G657.A2 fiber allows for flexible routing in compact pathways without compromising signal integrity. Perfect for enterprise data centers, telecom rooms, and tactical edge deployments, this armored patch cable eliminates the need for separate conduit or protective tubing\u2014saving space, time, and cost while delivering optical clarity with low insertion loss and high return loss.\n\nFeatures:\n\u2022 3m Length\n\u2022 LC/UPC Uniboot to\n\u2022 LC/UPC Uniboot\n\u2022 Singlemode OS2 G657.A2 Patch Cord\n\u2022 3.0mm OFCP-rated\n\u2022 yellow jacket\n\u2022 Passivated stainless steel spiral armor beneath the outer jacket\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "17.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1hgSUXXVP3dffnFARiOh7E1LjK5lU4xun",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "11\"",
      "x_studio_weight_lbs": ".118 LBS",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "12.6",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "13\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634041857",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1493,
      "display_name": "NFAP2-CA2-IOPY-LCULCU-005M",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/nfap2-ca2-iopy-lculcu-005m-1493",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/nfap2-ca2-iopy-lculcu-005m-1493",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEZ1mNhQlgAARnWanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEZ1mNhQlgAARnWanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAEAAElEQVR42uz9Wa9t2ZUeiH1jjDnXWrs559z+RktGsCeTykxlpposVCNbroItCLCBsmHD8...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAADS4ElEQVR42uz9ebRl6XUfhu29v+kMd773jTV2VQ/VE9CN7ga60cREAAIpUhItUrJlSZSWL...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAABCwElEQVR42uW9ebhc11Unusczn5qr7jzqXo225tGyHQ9J7ASHBMLY3SQBQtKh+SCP7ualo...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "NFAP2-CA2-IOPY-LCULCU-005M",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        27,
        "Fiber Optic Patch cable Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 24.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1458
      ],
      "product_variant_id": [
        1458,
        "NFAP2-CA2-IOPY-LCULCU-005M"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a028.74 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "5m Uniboot LC to LC SM/A2 3.0mm Plenum, Yellow Indoor/Outdoor \nOS2 Patch Cord with Passivated Metallic Armor under jacket\n\nThe 5m LC/UPC Uniboot to LC/UPC Uniboot Singlemode \nOS2 G657.A2 Patch Cord is designed for high-density, high-reliability fiber optic environments where space, protection, and performance are critical. Built with a 3.0mm OFCP-rated yellow jacket, this patch cable is reinforced with passivated stainless steel spiral armor beneath the outer jacket, offering excellent resistance to crush, kink, rodent damage, and abrasion\u2014ideal for harsh indoor/outdoor, riser, or exposed cabinet installations.\n\nIts uniboot LC/UPC design minimizes cable footprint by combining two fibers into a single connector housing, reducing congestion in patch panels and improving airflow. \n\nThe tight bend radius G657.A2 fiber allows for flexible routing in compact pathways without compromising signal integrity. Perfect for enterprise data centers, telecom rooms, and tactical edge deployments, this armored patch cable eliminates the need for separate conduit or protective tubing\u2014saving space, time, and cost while delivering optical clarity with low insertion loss and high return loss.\n\nFeatures:\n\u2022 5m Length\n\u2022 LC/UPC Uniboot to\n\u2022 LC/UPC Uniboot\n\u2022 Singlemode OS2 G657.A2 Patch Cord\n\u2022 3.0mm OFCP-rated\n\u2022 yellow jacket\n\u2022 Passivated stainless steel spiral armor beneath the outer jacket\n\u2022 Smallest outer diameter armored patch cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "22.49",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1hgSUXXVP3dffnFARiOh7E1LjK5lU4xun",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "11\"",
      "x_studio_weight_lbs": ".197 LBS",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "15.75",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "13\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634041864",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1494,
      "display_name": "NFAP2-CA2-IOPY-LCULCU-010M",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/nfap2-ca2-iopy-lculcu-010m-1494",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/nfap2-ca2-iopy-lculcu-010m-1494",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEZ1mNhQlgAARnWanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEZ1mNhQlgAARnWanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAEAAElEQVR42uz9Wa9t2ZUeiH1jjDnXWrs559z+RktGsCeTykxlpposVCNbroItCLCBsmHD8...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAADS4ElEQVR42uz9ebRl6XUfhu29v+kMd773jTV2VQ/VE9CN7ga60cREAAIpUhItUrJlSZSWL...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAABCwElEQVR42uW9ebhc11Unusczn5qr7jzqXo225tGyHQ9J7ASHBMLY3SQBQtKh+SCP7ualo...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "NFAP2-CA2-IOPY-LCULCU-010M",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        27,
        "Fiber Optic Patch cable Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 39.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1459
      ],
      "product_variant_id": [
        1459,
        "NFAP2-CA2-IOPY-LCULCU-010M"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a045.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "10m Uniboot LC to LC SM/A2 3.0mm Plenum, Yellow Indoor/Outdoor \nOS2 Patch Cord with Passivated Metallic Armor under jacket\n\nThe 10m LC/UPC Uniboot to LC/UPC Uniboot Singlemode \nOS2 G657.A2 Patch Cord is designed for high-density, high-reliability fiber optic environments where space, protection, and performance are critical. Built with a 3.0mm OFCP-rated yellow jacket, this patch cable is reinforced with passivated stainless steel spiral armor beneath the outer jacket, offering excellent resistance to crush, kink, rodent damage, and abrasion\u2014ideal for harsh indoor/outdoor, riser, or exposed cabinet installations.\n\nIts uniboot LC/UPC design minimizes cable footprint by combining two fibers into a single connector housing, reducing congestion in patch panels and improving airflow. \n\nThe tight bend radius G657.A2 fiber allows for flexible routing in compact pathways without compromising signal integrity. Perfect for enterprise data centers, telecom rooms, and tactical edge deployments, this armored patch cable eliminates the need for separate conduit or protective tubing\u2014saving space, time, and cost while delivering optical clarity with low insertion loss and high return loss.\n\nFeatures:\n\u2022 Length 10 meter\n\u2022 LC/UPC Uniboot to\n\u2022 LC/UPC Uniboot\n\u2022 Singlemode OS2 G657.A2 Patch Cord\n\u2022 3.0mm OFCP-rated\n\u2022 yellow jacket\n\u2022 Passivated stainless steel spiral armor beneath the outer jacket\n\u2022 Smallest outer diameter armored patch cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "33.79",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1hgSUXXVP3dffnFARiOh7E1LjK5lU4xun",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "11\"",
      "x_studio_weight_lbs": ".394 LBS",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "23.65",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "13\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634041871",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1495,
      "display_name": "NFAP2-CA2-IOPY-LCULCU-015M",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/nfap2-ca2-iopy-lculcu-015m-1495",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/nfap2-ca2-iopy-lculcu-015m-1495",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEZ1mNhQlgAARnWanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEZ1mNhQlgAARnWanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAEAAElEQVR42uz9Wa9t2ZUeiH1jjDnXWrs559z+RktGsCeTykxlpposVCNbroItCLCBsmHD8...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAADS4ElEQVR42uz9ebRl6XUfhu29v+kMd773jTV2VQ/VE9CN7ga60cREAAIpUhItUrJlSZSWL...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAABCwElEQVR42uW9ebhc11Unusczn5qr7jzqXo225tGyHQ9J7ASHBMLY3SQBQtKh+SCP7ualo...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "NFAP2-CA2-IOPY-LCULCU-015M",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        27,
        "Fiber Optic Patch cable Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 59.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1460
      ],
      "product_variant_id": [
        1460,
        "NFAP2-CA2-IOPY-LCULCU-015M"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a068.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "15m Uniboot LC to LC SM/A2 3.0mm Plenum, Yellow Indoor/Outdoor \nOS2 Patch Cord with Passivated Metallic Armor under jacket\n\nThe 15m LC/UPC Uniboot to LC/UPC Uniboot Singlemode \nOS2 G657.A2 Patch Cord is designed for high-density, high-reliability fiber optic environments where space, protection, and performance are critical. Built with a 3.0mm OFCP-rated yellow jacket, this patch cable is reinforced with passivated stainless steel spiral armor beneath the outer jacket, offering excellent resistance to crush, kink, rodent damage, and abrasion\u2014ideal for harsh indoor/outdoor, riser, or exposed cabinet installations.\n\nIts uniboot LC/UPC design minimizes cable footprint by combining two fibers into a single connector housing, reducing congestion in patch panels and improving airflow. \n\nThe tight bend radius G657.A2 fiber allows for flexible routing in compact pathways without compromising signal integrity. Perfect for enterprise data centers, telecom rooms, and tactical edge deployments, this armored patch cable eliminates the need for separate conduit or protective tubing\u2014saving space, time, and cost while delivering optical clarity with low insertion loss and high return loss.\n\nFeatures:\n\u2022 15m Length\n\u2022 LC/UPC Uniboot to\n\u2022 LC/UPC Uniboot\n\u2022 Singlemode OS2 G657.A2 Patch Cord\n\u2022 3.0mm OFCP-rated\n\u2022 yellow jacket\n\u2022 Passivated stainless steel spiral armor beneath the outer jacket\n\u2022 Smallest outer diameter armored patch cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "44.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1hgSUXXVP3dffnFARiOh7E1LjK5lU4xun",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "11\"",
      "x_studio_weight_lbs": ".591 LBS",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "31.52",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "13\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634041888",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1496,
      "display_name": "NFAP2-CA2-IOPY-LCULCU-020M",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/nfap2-ca2-iopy-lculcu-020m-1496",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/nfap2-ca2-iopy-lculcu-020m-1496",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEZ1mNhQlgAARnWanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEZ1mNhQlgAARnWanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAEAAElEQVR42uz9Wa9t2ZUeiH1jjDnXWrs559z+RktGsCeTykxlpposVCNbroItCLCBsmHD8...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAADS4ElEQVR42uz9ebRl6XUfhu29v+kMd773jTV2VQ/VE9CN7ga60cREAAIpUhItUrJlSZSWL...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAABCwElEQVR42uW9ebhc11Unusczn5qr7jzqXo225tGyHQ9J7ASHBMLY3SQBQtKh+SCP7ualo...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "NFAP2-CA2-IOPY-LCULCU-020M",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        27,
        "Fiber Optic Patch cable Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 69.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1461
      ],
      "product_variant_id": [
        1461,
        "NFAP2-CA2-IOPY-LCULCU-020M"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a080.49 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "20m Uniboot LC to LC SM/A2 3.0mm Plenum, Yellow Indoor/Outdoor \nOS2 Patch Cord with Passivated Metallic Armor under jacket\n\nThe 20m LC/UPC Uniboot to LC/UPC Uniboot Singlemode \nOS2 G657.A2 Patch Cord is designed for high-density, high-reliability fiber optic environments where space, protection, and performance are critical. Built with a 3.0mm OFCP-rated yellow jacket, this patch cable is reinforced with passivated stainless steel spiral armor beneath the outer jacket, offering excellent resistance to crush, kink, rodent damage, and abrasion\u2014ideal for harsh indoor/outdoor, riser, or exposed cabinet installations.\n\nIts uniboot LC/UPC design minimizes cable footprint by combining two fibers into a single connector housing, reducing congestion in patch panels and improving airflow. \n\nThe tight bend radius G657.A2 fiber allows for flexible routing in compact pathways without compromising signal integrity. Perfect for enterprise data centers, telecom rooms, and tactical edge deployments, this armored patch cable eliminates the need for separate conduit or protective tubing\u2014saving space, time, and cost while delivering optical clarity with low insertion loss and high return loss.\n\nFeatures:\n\u2022 20m Length\n\u2022 LC/UPC Uniboot to\n\u2022 LC/UPC Uniboot\n\u2022 Singlemode OS2 G657.A2 Patch Cord\n\u2022 3.0mm OFCP-rated\n\u2022 yellow jacket\n\u2022 Passivated stainless steel spiral armor beneath the outer jacket\n\u2022 Smallest outer diameter armored patch cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "56.35",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1hgSUXXVP3dffnFARiOh7E1LjK5lU4xun",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "11\"",
      "x_studio_weight_lbs": ".787 LBS",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "39.4",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "13\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634041895",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1497,
      "display_name": "NFAP2-CA2-IOPY-LCULCU-025M",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/nfap2-ca2-iopy-lculcu-025m-1497",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/nfap2-ca2-iopy-lculcu-025m-1497",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEZ1mNhQlgAARnWanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEZ1mNhQlgAARnWanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAEAAElEQVR42uz9Wa9t2ZUeiH1jjDnXWrs559z+RktGsCeTykxlpposVCNbroItCLCBsmHD8...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAADS4ElEQVR42uz9ebRl6XUfhu29v+kMd773jTV2VQ/VE9CN7ga60cREAAIpUhItUrJlSZSWL...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAABCwElEQVR42uW9ebhc11Unusczn5qr7jzqXo225tGyHQ9J7ASHBMLY3SQBQtKh+SCP7ualo...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "NFAP2-CA2-IOPY-LCULCU-025M",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        27,
        "Fiber Optic Patch cable Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 89.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1462
      ],
      "product_variant_id": [
        1462,
        "NFAP2-CA2-IOPY-LCULCU-025M"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a0103.49 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "25m Uniboot LC to LC SM/A2 3.0mm Plenum, Yellow Indoor/Outdoor \nOS2 Patch Cord with Passivated Metallic Armor under jacket\n\nThe 25m LC/UPC Uniboot to LC/UPC Uniboot Singlemode \nOS2 G657.A2 Patch Cord is designed for high-density, high-reliability fiber optic environments where space, protection, and performance are critical. Built with a 3.0mm OFCP-rated yellow jacket, this patch cable is reinforced with passivated stainless steel spiral armor beneath the outer jacket, offering excellent resistance to crush, kink, rodent damage, and abrasion\u2014ideal for harsh indoor/outdoor, riser, or exposed cabinet installations.\n\nIts uniboot LC/UPC design minimizes cable footprint by combining two fibers into a single connector housing, reducing congestion in patch panels and improving airflow. \n\nThe tight bend radius G657.A2 fiber allows for flexible routing in compact pathways without compromising signal integrity. Perfect for enterprise data centers, telecom rooms, and tactical edge deployments, this armored patch cable eliminates the need for separate conduit or protective tubing\u2014saving space, time, and cost while delivering optical clarity with low insertion loss and high return loss.\n\nFeatures:\n\u2022 25m Length\n\u2022 LC/UPC Uniboot to\n\u2022 LC/UPC Uniboot\n\u2022 Singlemode OS2 G657.A2 Patch Cord\n\u2022 3.0mm OFCP-rated\n\u2022 yellow jacket\n\u2022 Passivated stainless steel spiral armor beneath the outer jacket\n\u2022 Smallest outer diameter armored patch cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "67.59",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1hgSUXXVP3dffnFARiOh7E1LjK5lU4xun",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "11\"",
      "x_studio_weight_lbs": ".984 LBS",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "47.29",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "13\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634041901",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1498,
      "display_name": "NFAP2-CA2-IOPY-LCULCU-030M",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/nfap2-ca2-iopy-lculcu-030m-1498",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/nfap2-ca2-iopy-lculcu-030m-1498",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEZ1mNhQlgAARnWanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEZ1mNhQlgAARnWanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAEAAElEQVR42uz9Wa9t2ZUeiH1jjDnXWrs559z+RktGsCeTykxlpposVCNbroItCLCBsmHD8...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAADS4ElEQVR42uz9ebRl6XUfhu29v+kMd773jTV2VQ/VE9CN7ga60cREAAIpUhItUrJlSZSWL...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAABCwElEQVR42uW9ebhc11Unusczn5qr7jzqXo225tGyHQ9J7ASHBMLY3SQBQtKh+SCP7ualo...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "NFAP2-CA2-IOPY-LCULCU-030M",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        27,
        "Fiber Optic Patch cable Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 99.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1463
      ],
      "product_variant_id": [
        1463,
        "NFAP2-CA2-IOPY-LCULCU-030M"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a0114.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "30m Uniboot LC to LC SM/A2 3.0mm Plenum, Yellow Indoor/Outdoor \nOS2 Patch Cord with Passivated Metallic Armor under jacket\n\nThe 30m LC/UPC Uniboot to LC/UPC Uniboot Singlemode \nOS2 G657.A2 Patch Cord is designed for high-density, high-reliability fiber optic environments where space, protection, and performance are critical. Built with a 3.0mm OFCP-rated yellow jacket, this patch cable is reinforced with passivated stainless steel spiral armor beneath the outer jacket, offering excellent resistance to crush, kink, rodent damage, and abrasion\u2014ideal for harsh indoor/outdoor, riser, or exposed cabinet installations.\n\nIts uniboot LC/UPC design minimizes cable footprint by combining two fibers into a single connector housing, reducing congestion in patch panels and improving airflow. \n\nThe tight bend radius G657.A2 fiber allows for flexible routing in compact pathways without compromising signal integrity. Perfect for enterprise data centers, telecom rooms, and tactical edge deployments, this armored patch cable eliminates the need for separate conduit or protective tubing\u2014saving space, time, and cost while delivering optical clarity with low insertion loss and high return loss.\n\nFeatures:\n\u2022 30m Length\n\u2022 LC/UPC Uniboot to\n\u2022 LC/UPC Uniboot\n\u2022 Singlemode OS2 G657.A2 Patch Cord\n\u2022 3.0mm OFCP-rated\n\u2022 yellow jacket\n\u2022 Passivated stainless steel spiral armor beneath the outer jacket\n\u2022 Smallest outer diameter armored patch cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "78.95",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1hgSUXXVP3dffnFARiOh7E1LjK5lU4xun",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "11\"",
      "x_studio_weight_lbs": "1.96 LBS",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "55.19",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "13\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634041918",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1499,
      "display_name": "NFAP2-CM4-IOPA-LCLC-0.5M",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/nfap2-cm4-iopa-lclc-05m-1499",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/nfap2-cm4-iopa-lclc-05m-1499",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEVsWNhQlgAARWxanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEVsWNhQlgAARWxanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAEAAElEQVR42uz9a6xtaboeBj3P+31jjHlda1+qqk9XH5+7OT62D3CMHaMYB6FgFIOxc1MSo...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAADEZklEQVR42uz9d7jtWXYVho4x11q/sPPJN9+K3dW51UFNt1pCQoEgbIugZwuwRbaxbFk2Y...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAA+1ElEQVR42u29d7zuV1UnvNYuv/7008vtJffe9EoSWiAEQxBihVHxxZcRRwdFcBz0FRVm1...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "NFAP2-CM4-IOPA-LCLC-0.5M",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        27,
        "Fiber Optic Patch cable Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 13.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1464
      ],
      "product_variant_id": [
        1464,
        "NFAP2-CM4-IOPA-LCLC-0.5M"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a016.09 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "0.5m Uniboot LC-Uniboot LC OM4 3.0mm Plenum,Aqua,Fiber,Indoor/Outdoor Patch Cord\n\nThe Point 2 Point 0.5m LC/UPC to LC/UPC OM4 Uniboot Patch \nCord is purpose-built for high-performance multimode connectivity in data centers, enterprise networks, and high-density optical environments. With laser-optimized OM4 50/125\u00b5m fiber, this patch cord supports ultra-fast 10G, 40G, and 100G Ethernet over extended distances with low insertion loss and minimal modal dispersion.\n\nThis armored OM4 jumper features a 3.0mm OFNP-rated aqua jacket and passivated stainless steel spiral armor hidden beneath the sheath, delivering excellent crush resistance and protection against rodents, abrasion, and tight bends\u2014without the need for additional conduit. Its uniboot LC/UPC connectors reduce cable bulk by combining two fibers into a single housing, simplifying patch management in tight spaces like crowded racks and patch panels.\n\nEngineered for indoor/outdoor and plenum-rated pathways, this patch cable eliminates costly splicing or transitions, offering a seamless, plug-and-play solution for mission-critical fiber networks.\n\nFeatures:\n\u2022 0.5m Length\n\u2022 LC/UPC Uniboot to\n\u2022 LC/UPC Uniboot\n\u2022 Multimode OM4 50/125\u00b5m  Patch Cord\n\u2022 3.0mm OFCP-rated\n\u2022 Aqua jacket\n\u2022 Passivated stainless steel spiral armor beneath the outer jacket\n\u2022 Smallest outer diameter armored patch cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "12.49",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1dhM4_0qz4sujbTp8iScdDQaqhsZNTuQA",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "11\"",
      "x_studio_weight_lbs": ".006 LBS",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "8.68",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "13\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634041925",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1500,
      "display_name": "NFAP2-CM4-IOPA-LCLC-001M",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/nfap2-cm4-iopa-lclc-001m-1500",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/nfap2-cm4-iopa-lclc-001m-1500",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEVsWNhQlgAARWxanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEVsWNhQlgAARWxanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAEAAElEQVR42uz9a6xtaboeBj3P+31jjHlda1+qqk9XH5+7OT62D3CMHaMYB6FgFIOxc1MSo...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAADEZklEQVR42uz9d7jtWXYVho4x11q/sPPJN9+K3dW51UFNt1pCQoEgbIugZwuwRbaxbFk2Y...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAA+1ElEQVR42u29d7zuV1UnvNYuv/7008vtJffe9EoSWiAEQxBihVHxxZcRRwdFcBz0FRVm1...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "NFAP2-CM4-IOPA-LCLC-001M",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        27,
        "Fiber Optic Patch cable Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 15.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1465
      ],
      "product_variant_id": [
        1465,
        "NFAP2-CM4-IOPA-LCLC-001M"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a018.39 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "1m Uniboot LC-Uniboot LC OM4 3.0mm Plenum,Aqua,Fiber,Indoor/Outdoor\u00a0Patch Cord\n\nThe Point 2 Point 1m LC/UPC to LC/UPC OM4 Uniboot Patch \nCord is purpose-built for high-performance multimode connectivity in data centers, enterprise networks, and high-density optical environments. With laser-optimized OM4 50/125\u00b5m fiber, this patch cord supports ultra-fast 10G, 40G, and 100G Ethernet over extended distances with low insertion loss and minimal modal dispersion.\n\nThis armored OM4 jumper features a 3.0mm OFNP-rated aqua jacket and passivated stainless steel spiral armor hidden beneath the sheath, delivering excellent crush resistance and protection against rodents, abrasion, and tight bends\u2014without the need for additional conduit. Its uniboot LC/UPC connectors reduce cable bulk by combining two fibers into a single housing, simplifying patch management in tight spaces like crowded racks and patch panels.\n\nEngineered for indoor/outdoor and plenum-rated pathways, this patch cable eliminates costly splicing or transitions, offering a seamless, plug-and-play solution for mission-critical fiber networks.\n\nFeatures:\n\u2022 1m Length\n\u2022 LC/UPC Uniboot to\n\u2022 LC/UPC Uniboot\n\u2022 Multimode OM4 50/125\u00b5m  Patch Cord\n\u2022 3.0mm OFCP-rated\n\u2022 Aqua jacket\n\u2022 Passivated stainless steel spiral armor beneath the outer jacket\n\u2022 Smallest outer diameter armored patch cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "14.5",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1dhM4_0qz4sujbTp8iScdDQaqhsZNTuQA",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "11\"",
      "x_studio_weight_lbs": ".012 LBS",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "10.14",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "13\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634041932",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1501,
      "display_name": "NFAP2-CM4-IOPA-LCLC-002M",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/nfap2-cm4-iopa-lclc-002m-1501",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/nfap2-cm4-iopa-lclc-002m-1501",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEVsWNhQlgAARWxanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEVsWNhQlgAARWxanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAEAAElEQVR42uz9a6xtaboeBj3P+31jjHlda1+qqk9XH5+7OT62D3CMHaMYB6FgFIOxc1MSo...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAADEZklEQVR42uz9d7jtWXYVho4x11q/sPPJN9+K3dW51UFNt1pCQoEgbIugZwuwRbaxbFk2Y...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAA+1ElEQVR42u29d7zuV1UnvNYuv/7008vtJffe9EoSWiAEQxBihVHxxZcRRwdFcBz0FRVm1...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "NFAP2-CM4-IOPA-LCLC-002M",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        27,
        "Fiber Optic Patch cable Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 24.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1466
      ],
      "product_variant_id": [
        1466,
        "NFAP2-CM4-IOPA-LCLC-002M"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a028.74 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "2m Uniboot LC-Uniboot LC OM4 3.0mm Plenum,Aqua,Fiber,Indoor/Outdoor Patch Cord\n\nThe Point 2 Point 2m LC/UPC to LC/UPC OM4 Uniboot Patch \nCord is purpose-built for high-performance multimode connectivity in data centers, enterprise networks, and high-density optical environments. With laser-optimized OM4 50/125\u00b5m fiber, this patch cord supports ultra-fast 10G, 40G, and 100G Ethernet over extended distances with low insertion loss and minimal modal dispersion.\n\nThis armored OM4 jumper features a 3.0mm OFNP-rated aqua jacket and passivated stainless steel spiral armor hidden beneath the sheath, delivering excellent crush resistance and protection against rodents, abrasion, and tight bends\u2014without the need for additional conduit. Its uniboot LC/UPC connectors reduce cable bulk by combining two fibers into a single housing, simplifying patch management in tight spaces like crowded racks and patch panels.\n\nEngineered for indoor/outdoor and plenum-rated pathways, this patch cable eliminates costly splicing or transitions, offering a seamless, plug-and-play solution for mission-critical fiber networks.\n\nFeatures:\n\u2022 2m Length\n\u2022 LC/UPC Uniboot to\n\u2022 LC/UPC Uniboot\n\u2022 Multimode OM4 50/125\u00b5m  Patch Cord\n\u2022 3.0mm OFCP-rated\n\u2022 Aqua jacket\n\u2022 Passivated stainless steel spiral armor beneath the outer jacket\n\u2022 Smallest outer diameter armored patch cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "18.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1dhM4_0qz4sujbTp8iScdDQaqhsZNTuQA",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "11\"",
      "x_studio_weight_lbs": ".024 LBS",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "13.32",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "13\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634041949",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1502,
      "display_name": "NFAP2-CM4-IOPA-LCLC-003M",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/nfap2-cm4-iopa-lclc-003m-1502",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/nfap2-cm4-iopa-lclc-003m-1502",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEVsWNhQlgAARWxanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEVsWNhQlgAARWxanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAEAAElEQVR42uz9a6xtaboeBj3P+31jjHlda1+qqk9XH5+7OT62D3CMHaMYB6FgFIOxc1MSo...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAADEZklEQVR42uz9d7jtWXYVho4x11q/sPPJN9+K3dW51UFNt1pCQoEgbIugZwuwRbaxbFk2Y...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAA+1ElEQVR42u29d7zuV1UnvNYuv/7008vtJffe9EoSWiAEQxBihVHxxZcRRwdFcBz0FRVm1...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "NFAP2-CM4-IOPA-LCLC-003M",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        27,
        "Fiber Optic Patch cable Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 29.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1467
      ],
      "product_variant_id": [
        1467,
        "NFAP2-CM4-IOPA-LCLC-003M"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a034.49 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "3m Uniboot LC-Uniboot LC OM4 3.0mm Plenum,Aqua,Fiber,Indoor/Outdoor Patch Cord\n\nThe Point 2 Point 3m LC/UPC to LC/UPC OM4 Uniboot Patch \nCord is purpose-built for high-performance multimode connectivity in data centers, enterprise networks, and high-density optical environments. With laser-optimized OM4 50/125\u00b5m fiber, this patch cord supports ultra-fast 10G, 40G, and 100G Ethernet over extended distances with low insertion loss and minimal modal dispersion.\n\nThis armored OM4 jumper features a 3.0mm OFNP-rated aqua jacket and passivated stainless steel spiral armor hidden beneath the sheath, delivering excellent crush resistance and protection against rodents, abrasion, and tight bends\u2014without the need for additional conduit. Its uniboot LC/UPC connectors reduce cable bulk by combining two fibers into a single housing, simplifying patch management in tight spaces like crowded racks and patch panels.\n\nEngineered for indoor/outdoor and plenum-rated pathways, this patch cable eliminates costly splicing or transitions, offering a seamless, plug-and-play solution for mission-critical fiber networks.\n\nFeatures:\n\u2022 3m Length\n\u2022 LC/UPC Uniboot to\n\u2022 LC/UPC Uniboot\n\u2022 Multimode OM4 50/125\u00b5m  Patch Cord\n\u2022 3.0mm OFCP-rated\n\u2022 Aqua jacket\n\u2022 Passivated stainless steel spiral armor beneath the outer jacket\n\u2022 Smallest outer diameter armored patch cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "23.69",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1dhM4_0qz4sujbTp8iScdDQaqhsZNTuQA",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "11\"",
      "x_studio_weight_lbs": ".118 LBS",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "16.56",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "13\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634041956",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1503,
      "display_name": "NFAP2-CM4-IOPA-LCLC-005M",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/nfap2-cm4-iopa-lclc-005m-1503",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/nfap2-cm4-iopa-lclc-005m-1503",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEVsWNhQlgAARWxanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEVsWNhQlgAARWxanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAEAAElEQVR42uz9a6xtaboeBj3P+31jjHlda1+qqk9XH5+7OT62D3CMHaMYB6FgFIOxc1MSo...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAADEZklEQVR42uz9d7jtWXYVho4x11q/sPPJN9+K3dW51UFNt1pCQoEgbIugZwuwRbaxbFk2Y...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAA+1ElEQVR42u29d7zuV1UnvNYuv/7008vtJffe9EoSWiAEQxBihVHxxZcRRwdFcBz0FRVm1...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "NFAP2-CM4-IOPA-LCLC-005M",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        27,
        "Fiber Optic Patch cable Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 39.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1468
      ],
      "product_variant_id": [
        1468,
        "NFAP2-CM4-IOPA-LCLC-005M"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a045.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "5m Uniboot LC-Uniboot LC OM4 3.0mm Plenum,Aqua,Fiber,Indoor/Outdoor Patch Cord\n\nThe Point 2 Point 5m LC/UPC to LC/UPC OM4 Uniboot Patch \nCord is purpose-built for high-performance multimode connectivity in data centers, enterprise networks, and high-density optical environments. With laser-optimized OM4 50/125\u00b5m fiber, this patch cord supports ultra-fast 10G, 40G, and 100G Ethernet over extended distances with low insertion loss and minimal modal dispersion.\n\nThis armored OM4 jumper features a 3.0mm OFNP-rated aqua jacket and passivated stainless steel spiral armor hidden beneath the sheath, delivering excellent crush resistance and protection against rodents, abrasion, and tight bends\u2014without the need for additional conduit. Its uniboot LC/UPC connectors reduce cable bulk by combining two fibers into a single housing, simplifying patch management in tight spaces like crowded racks and patch panels.\n\nEngineered for indoor/outdoor and plenum-rated pathways, this patch cable eliminates costly splicing or transitions, offering a seamless, plug-and-play solution for mission-critical fiber networks.\n\nFeatures:\n\u2022 5m Length\n\u2022 LC/UPC Uniboot to\n\u2022 LC/UPC Uniboot\n\u2022 Multimode OM4 50/125\u00b5m  Patch Cord\n\u2022 3.0mm OFCP-rated\n\u2022 Aqua jacket\n\u2022 Passivated stainless steel spiral armor beneath the outer jacket\n\u2022 Smallest outer diameter armored patch cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "32.79",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1dhM4_0qz4sujbTp8iScdDQaqhsZNTuQA",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "11\"",
      "x_studio_weight_lbs": ".197 LBS",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "22.96",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "13\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634041963",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1504,
      "display_name": "NFAP2-CM4-IOPA-LCLC-010M",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/nfap2-cm4-iopa-lclc-010m-1504",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/nfap2-cm4-iopa-lclc-010m-1504",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEVsWNhQlgAARWxanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEVsWNhQlgAARWxanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAEAAElEQVR42uz9a6xtaboeBj3P+31jjHlda1+qqk9XH5+7OT62D3CMHaMYB6FgFIOxc1MSo...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAADEZklEQVR42uz9d7jtWXYVho4x11q/sPPJN9+K3dW51UFNt1pCQoEgbIugZwuwRbaxbFk2Y...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAA+1ElEQVR42u29d7zuV1UnvNYuv/7008vtJffe9EoSWiAEQxBihVHxxZcRRwdFcBz0FRVm1...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "NFAP2-CM4-IOPA-LCLC-010M",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        27,
        "Fiber Optic Patch cable Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 59.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1469
      ],
      "product_variant_id": [
        1469,
        "NFAP2-CM4-IOPA-LCLC-010M"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a068.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "10m Uniboot LC-Uniboot LC OM4 3.0mm Plenum,Aqua,Fiber,Indoor/Outdoor Patch Cord\n\nThe Point 2 Point 10m LC/UPC to LC/UPC OM4 Uniboot Patch \nCord is purpose-built for high-performance multimode connectivity in data centers, enterprise networks, and high-density optical environments. With laser-optimized OM4 50/125\u00b5m fiber, this patch cord supports ultra-fast 10G, 40G, and 100G Ethernet over extended distances with low insertion loss and minimal modal dispersion.\n\nThis armored OM4 jumper features a 3.0mm OFNP-rated aqua jacket and passivated stainless steel spiral armor hidden beneath the sheath, delivering excellent crush resistance and protection against rodents, abrasion, and tight bends\u2014without the need for additional conduit. Its uniboot LC/UPC connectors reduce cable bulk by combining two fibers into a single housing, simplifying patch management in tight spaces like crowded racks and patch panels.\n\nEngineered for indoor/outdoor and plenum-rated pathways, this patch cable eliminates costly splicing or transitions, offering a seamless, plug-and-play solution for mission-critical fiber networks.\n\nFeatures:\n\u2022 10m Length\n\u2022 LC/UPC Uniboot to\n\u2022 LC/UPC Uniboot\n\u2022 Multimode OM4 50/125\u00b5m  Patch Cord\n\u2022 3.0mm OFCP-rated\n\u2022 Aqua jacket\n\u2022 Passivated stainless steel spiral armor beneath the outer jacket\n\u2022 Smallest outer diameter armored patch cable",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "55.59",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1dhM4_0qz4sujbTp8iScdDQaqhsZNTuQA",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "11\"",
      "x_studio_weight_lbs": ".394 LBS",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "38.92",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "13\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634041970",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1505,
      "display_name": "NFAP2-CM4-IOPA-LCLC-015M",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/nfap2-cm4-iopa-lclc-015m-1505",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/nfap2-cm4-iopa-lclc-015m-1505",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEVsWNhQlgAARWxanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEVsWNhQlgAARWxanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAEAAElEQVR42uz9a6xtaboeBj3P+31jjHlda1+qqk9XH5+7OT62D3CMHaMYB6FgFIOxc1MSo...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAADEZklEQVR42uz9d7jtWXYVho4x11q/sPPJN9+K3dW51UFNt1pCQoEgbIugZwuwRbaxbFk2Y...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAA+1ElEQVR42u29d7zuV1UnvNYuv/7008vtJffe9EoSWiAEQxBihVHxxZcRRwdFcBz0FRVm1...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "NFAP2-CM4-IOPA-LCLC-015M",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        27,
        "Fiber Optic Patch cable Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 99.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1470
      ],
      "product_variant_id": [
        1470,
        "NFAP2-CM4-IOPA-LCLC-015M"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a0114.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "15m Uniboot LC-Uniboot LC OM4 3.0mm Plenum,Aqua,Fiber,Indoor/Outdoor Patch Cord\n\nThe Point 2 Point 15m LC/UPC to LC/UPC OM4 Uniboot Patch \nCord is purpose-built for high-performance multimode connectivity in data centers, enterprise networks, and high-density optical environments. With laser-optimized OM4 50/125\u00b5m fiber, this patch cord supports ultra-fast 10G, 40G, and 100G Ethernet over extended distances with low insertion loss and minimal modal dispersion.\n\nThis armored OM4 jumper features a 3.0mm OFNP-rated aqua jacket and passivated stainless steel spiral armor hidden beneath the sheath, delivering excellent crush resistance and protection against rodents, abrasion, and tight bends\u2014without the need for additional conduit. Its uniboot LC/UPC connectors reduce cable bulk by combining two fibers into a single housing, simplifying patch management in tight spaces like crowded racks and patch panels.\n\nEngineered for indoor/outdoor and plenum-rated pathways, this patch cable eliminates costly splicing or transitions, offering a seamless, plug-and-play solution for mission-critical fiber networks.\n\nFeatures:\n\u2022 15m Length\n\u2022 LC/UPC Uniboot to\n\u2022 LC/UPC Uniboot\n\u2022 Multimode OM4 50/125\u00b5m  Patch Cord\n\u2022 3.0mm OFCP-rated\n\u2022 Aqua jacket\n\u2022 Passivated stainless steel spiral armor beneath the outer jacket\n\u2022 Smallest outer diameter armored patch cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "78.5",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1dhM4_0qz4sujbTp8iScdDQaqhsZNTuQA",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "11\"",
      "x_studio_weight_lbs": ".591 LBS",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "54.95",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "13\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634041987",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1506,
      "display_name": "NFAP2-CM4-IOPA-LCLC-020M",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/nfap2-cm4-iopa-lclc-020m-1506",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/nfap2-cm4-iopa-lclc-020m-1506",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEVsWNhQlgAARWxanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEVsWNhQlgAARWxanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAEAAElEQVR42uz9a6xtaboeBj3P+31jjHlda1+qqk9XH5+7OT62D3CMHaMYB6FgFIOxc1MSo...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAADEZklEQVR42uz9d7jtWXYVho4x11q/sPPJN9+K3dW51UFNt1pCQoEgbIugZwuwRbaxbFk2Y...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAA+1ElEQVR42u29d7zuV1UnvNYuv/7008vtJffe9EoSWiAEQxBihVHxxZcRRwdFcBz0FRVm1...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "NFAP2-CM4-IOPA-LCLC-020M",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        27,
        "Fiber Optic Patch cable Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 149.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1471
      ],
      "product_variant_id": [
        1471,
        "NFAP2-CM4-IOPA-LCLC-020M"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a0172.49 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "20m Uniboot LC-Uniboot LC OM4 3.0mm Plenum,Aqua,Fiber,Indoor/Outdoor Patch Cord\n\nThe Point 2 Point 20m LC/UPC to LC/UPC OM4 Uniboot Patch \nCord is purpose-built for high-performance multimode connectivity in data centers, enterprise networks, and high-density optical environments. With laser-optimized OM4 50/125\u00b5m fiber, this patch cord supports ultra-fast 10G, 40G, and 100G Ethernet over extended distances with low insertion loss and minimal modal dispersion.\n\nThis armored OM4 jumper features a 3.0mm OFNP-rated aqua jacket and passivated stainless steel spiral armor hidden beneath the sheath, delivering excellent crush resistance and protection against rodents, abrasion, and tight bends\u2014without the need for additional conduit. Its uniboot LC/UPC connectors reduce cable bulk by combining two fibers into a single housing, simplifying patch management in tight spaces like crowded racks and patch panels.\n\nEngineered for indoor/outdoor and plenum-rated pathways, this patch cable eliminates costly splicing or transitions, offering a seamless, plug-and-play solution for mission-critical fiber networks.\n\nFeatures:\n\u2022 20m Length\n\u2022 LC/UPC Uniboot to\n\u2022 LC/UPC Uniboot\n\u2022 Multimode OM4 50/125\u00b5m  Patch Cord\n\u2022 3.0mm OFCP-rated\n\u2022 Aqua jacket\n\u2022 Passivated stainless steel spiral armor beneath the outer jacket\n\u2022 Smallest outer diameter armored patch cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "100.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1dhM4_0qz4sujbTp8iScdDQaqhsZNTuQA",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "11\"",
      "x_studio_weight_lbs": ".787 LBS",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "70.93",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "13\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634041994",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1507,
      "display_name": "NFAP2-CM4-IOPA-LCLC-025M",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/nfap2-cm4-iopa-lclc-025m-1507",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/nfap2-cm4-iopa-lclc-025m-1507",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEVsWNhQlgAARWxanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEVsWNhQlgAARWxanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAEAAElEQVR42uz9a6xtaboeBj3P+31jjHlda1+qqk9XH5+7OT62D3CMHaMYB6FgFIOxc1MSo...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAADEZklEQVR42uz9d7jtWXYVho4x11q/sPPJN9+K3dW51UFNt1pCQoEgbIugZwuwRbaxbFk2Y...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAA+1ElEQVR42u29d7zuV1UnvNYuv/7008vtJffe9EoSWiAEQxBihVHxxZcRRwdFcBz0FRVm1...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "NFAP2-CM4-IOPA-LCLC-025M",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        27,
        "Fiber Optic Patch cable Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 179.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1472
      ],
      "product_variant_id": [
        1472,
        "NFAP2-CM4-IOPA-LCLC-025M"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a0206.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "25m Uniboot LC-Uniboot LC OM4 3.0mm Plenum,Aqua,Fiber,Indoor/Outdoor Patch Cord\n\nThe Point 2 Point 25m LC/UPC to LC/UPC OM4 Uniboot Patch \nCord is purpose-built for high-performance multimode connectivity in data centers, enterprise networks, and high-density optical environments. With laser-optimized OM4 50/125\u00b5m fiber, this patch cord supports ultra-fast 10G, 40G, and 100G Ethernet over extended distances with low insertion loss and minimal modal dispersion.\n\nThis armored OM4 jumper features a 3.0mm OFNP-rated aqua jacket and passivated stainless steel spiral armor hidden beneath the sheath, delivering excellent crush resistance and protection against rodents, abrasion, and tight bends\u2014without the need for additional conduit. Its uniboot LC/UPC connectors reduce cable bulk by combining two fibers into a single housing, simplifying patch management in tight spaces like crowded racks and patch panels.\n\nEngineered for indoor/outdoor and plenum-rated pathways, this patch cable eliminates costly splicing or transitions, offering a seamless, plug-and-play solution for mission-critical fiber networks.\n\nFeatures:\n\u2022 25m Length\n\u2022 LC/UPC Uniboot to\n\u2022 LC/UPC Uniboot\n\u2022 Multimode OM4 50/125\u00b5m  Patch Cord\n\u2022 3.0mm OFCP-rated\n\u2022 Aqua jacket\n\u2022 Passivated stainless steel spiral armor beneath the outer jacket\n\u2022 Smallest outer diameter armored patch cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "124.29",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1dhM4_0qz4sujbTp8iScdDQaqhsZNTuQA",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "11\"",
      "x_studio_weight_lbs": ".984 LBS",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "86.95",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "13\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634042007",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1508,
      "display_name": "NFAP2-CM4-IOPA-LCLC-030M",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/nfap2-cm4-iopa-lclc-030m-1508",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/nfap2-cm4-iopa-lclc-030m-1508",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEVsWNhQlgAARWxanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEVsWNhQlgAARWxanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAEAAElEQVR42uz9a6xtaboeBj3P+31jjHlda1+qqk9XH5+7OT62D3CMHaMYB6FgFIOxc1MSo...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAADEZklEQVR42uz9d7jtWXYVho4x11q/sPPJN9+K3dW51UFNt1pCQoEgbIugZwuwRbaxbFk2Y...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAA+1ElEQVR42u29d7zuV1UnvNYuv/7008vtJffe9EoSWiAEQxBihVHxxZcRRwdFcBz0FRVm1...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "NFAP2-CM4-IOPA-LCLC-030M",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        27,
        "Fiber Optic Patch cable Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 199.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1473
      ],
      "product_variant_id": [
        1473,
        "NFAP2-CM4-IOPA-LCLC-030M"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a0229.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "30m Uniboot LC-Uniboot LC OM4 3.0mm Plenum,Aqua,Fiber,Indoor/Outdoor Patch Cord\n\nThe Point 2 Point 30m LC/UPC to LC/UPC OM4 Uniboot Patch \nCord is purpose-built for high-performance multimode connectivity in data centers, enterprise networks, and high-density optical environments. With laser-optimized OM4 50/125\u00b5m fiber, this patch cord supports ultra-fast 10G, 40G, and 100G Ethernet over extended distances with low insertion loss and minimal modal dispersion.\n\nThis armored OM4 jumper features a 3.0mm OFNP-rated aqua jacket and passivated stainless steel spiral armor hidden beneath the sheath, delivering excellent crush resistance and protection against rodents, abrasion, and tight bends\u2014without the need for additional conduit. Its uniboot LC/UPC connectors reduce cable bulk by combining two fibers into a single housing, simplifying patch management in tight spaces like crowded racks and patch panels.\n\nEngineered for indoor/outdoor and plenum-rated pathways, this patch cable eliminates costly splicing or transitions, offering a seamless, plug-and-play solution for mission-critical fiber networks.\n\nFeatures:\n\u2022 30m Length\n\u2022 LC/UPC Uniboot to\n\u2022 LC/UPC Uniboot\n\u2022 Multimode OM4 50/125\u00b5m  Patch Cord\n\u2022 3.0mm OFCP-rated\n\u2022 Aqua jacket\n\u2022 Passivated stainless steel spiral armor beneath the outer jacket\n\u2022 Smallest outer diameter armored patch cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "146.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1dhM4_0qz4sujbTp8iScdDQaqhsZNTuQA",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "11\"",
      "x_studio_weight_lbs": "1.96 LBS",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "102.9",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "13\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634042014",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1511,
      "display_name": "NFH2-A2-182-OSP-1000",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/nfh2-a2-182-osp-1000-1511",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/nfh2-a2-182-osp-1000-1511",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEJj2NhQlgAAQmPanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEJj2NhQlgAAQmPanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAEAAElEQVR42nz9Waxt25YlhPXWx5xr7b1PcYt3730vXtQZkWQAEQFOlAJTGGxsQAn5YQsJ2...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAEAAElEQVR42rz9Z7wkR3U+jp9TVR0n3XzvZu2uIpIAE0TGJJMzAozBNtjY/uKcIw5g4wCI4...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAABXTklEQVR42qW9d5xkV3EvfuqkmzpOns27Wu0qrIRyREgoIIuMjQGDAYNtsI2NbWw9+8HD8...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "NFH2-A2-182-OSP-1000",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        15,
        "Power & Fiber Armored Bulk Cable"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 3399.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1476
      ],
      "product_variant_id": [
        1476,
        "NFH2-A2-182-OSP-1000"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a03,909.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "2 Strand Singlemode Plus 18AWG Hybrid Power in ONE Jacket and protected by Stainless Steel Armored Fiber Cable 1000 Foot Reel\n\nThe P2P 2-Strand SM G657A2 + 2C 18AWG Composite Cable \nis the ultimate hybrid solution for delivering both power and data in one ruggedized armored package. Designed for harsh outdoor and OSP environments, this cable integrates high-performance singlemode G657.A2 fiber and 18AWG copper conductors within a single, armored sheath\u2014eliminating the need for multiple cable runs or conduit systems. \n\nThe internal fiber is housed in a spiral stainless steel tube, providing outstanding crush resistance and rodent protection, while water-blocking tape and Kevlar strength members ensure long-term reliability in moisture-prone and high-tension installations. \n\nThis cable is ideal for powering edge devices such as broadcast & IP cameras, wireless access points, remote sensors, and small enclosures that require both connectivity and DC power. \n\nFor installers, this means fewer labor hours, faster deployment, and no hassle transitioning between power and data cables\u2014everything is pre-bundled for simplicity. \n\nCustomers benefit from lower material costs, streamlined project design, and a rugged composite cable that\u2019s built to withstand outdoor abuse without sacrificing performance. Whether trenching, mounting in conduit, or deploying overhead, this armored P2P cable ensures maximum uptime, durability, and installation speed\u2014all in one hybrid line.\n\nFeatures:\n\u2022 1000 Foot Reel\n\u2022 Power & Fiber under ONE Jacket\n\u2022 Singlemode\n\u2022 2 Strand\n\u2022 18 AWG Copper Conductor\n\u2022 Stainless Steel Armor\n\u2022 Tight Buffer\n\u2022 Bend Insensitive G657A2\n\u2022 Water Blocking\n\u2022 Fiber Sub Unit LSZH\n\u2022 Outer Jacket TPE Black\n\u2022 Smallest outer diameter armored cable\n\u2022 Outer Diameter 10.0mm\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "2299.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1EqwZJ",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "China",
      "x_studio_width_inches": "24\"",
      "x_studio_weight_lbs": "108lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "1750",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "24\"",
      "x_studio_height_inches": "18\"",
      "x_studio_upc_code": "743634044230",
      "x_studio_ship_ups_or_freight": "UPS/Truck",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1509,
      "display_name": "NFH2-A2-182-OSP-250",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/nfh2-a2-182-osp-250-1509",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/nfh2-a2-182-osp-250-1509",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEBxmNhQlgAAQHGanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEBxmNhQlgAAQHGanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAEAAElEQVR42nT9Wa+tSZIlhtky92+fc4e4ERmRQ2XWXD2ouyWq2RAIERJJ8UVCvxEQIEKP+...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAEAAElEQVR42sT9Z7xlSVU3jq+1qmqHk26+nbunJzFDFnQEJQw4KEhUxMRPRcGEmB4x8YhZF...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAABXvUlEQVR42p29d4Cm51Ufes5T3vq16bO9SNpV7yvJliV3G2OaTXUCIQkhEIjJTXIvocMNS...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "NFH2-A2-182-OSP-250",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        15,
        "Power & Fiber Armored Bulk Cable"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 799.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1474
      ],
      "product_variant_id": [
        1474,
        "NFH2-A2-182-OSP-250"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a0919.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "2 Strand Singlemode Plus 18AWG Hybrid Power in ONE Jacket and protected by Stainless Steel Armored +E55+E53+E55+E53+E55+E53+E55+E53+E+E53\n\nThe P2P 2-Strand SM G657A2 + 2C 18AWG Composite Cable \nis the ultimate hybrid solution for delivering both power and data in one ruggedized armored package. Designed for harsh outdoor and OSP environments, this cable integrates high-performance singlemode G657.A2 fiber and 18AWG copper conductors within a single, armored sheath\u2014eliminating the need for multiple cable runs or conduit systems. \n\nThe internal fiber is housed in a spiral stainless steel tube, providing outstanding crush resistance and rodent protection, while water-blocking tape and Kevlar strength members ensure long-term reliability in moisture-prone and high-tension installations. \n\nThis cable is ideal for powering edge devices such as broadcast & IP cameras, wireless access points, remote sensors, and small enclosures that require both connectivity and DC power. \n\nFor installers, this means fewer labor hours, faster deployment, and no hassle transitioning between power and data cables\u2014everything is pre-bundled for simplicity. \n\nCustomers benefit from lower material costs, streamlined project design, and a rugged composite cable that\u2019s built to withstand outdoor abuse without sacrificing performance. Whether trenching, mounting in conduit, or deploying overhead, this armored P2P cable ensures maximum uptime, durability, and installation speed\u2014all in one hybrid line.\n\nFeatures:\n\u2022 250 Foot Reel\n\u2022 Singlemode\n\u2022 2 Strand\n\u2022 18 AWG Copper Conductor\n\u2022 Power & Fiber under one jacket\n\u2022 Stainless Steel Armor\n\u2022 Tight Buffer\n\u2022 Bend Insensitive G657A2\n\u2022 Water Blocking\n\u2022 Fiber Sub Unit LSZH\n\u2022 Outer Jacket TPE Black\n\u2022 Smallest outer diameter armored cable\n\u2022 Outer Diameter 10.0mm\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "579.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1EqwZJ",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "China",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "30lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "437.5",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044216",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1510,
      "display_name": "NFH2-A2-182-OSP-500",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/nfh2-a2-182-osp-500-1510",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/nfh2-a2-182-osp-500-1510",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEH22NhQlgAAQfbanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAIAAADwf7zUAAEH22NhQlgAAQfbanVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAANxNqdW1iA...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAEAAElEQVR42nz9W69sW5IehkXEmHNmrrX23mefc+pUdXVXVV/JVvMitogmaV5MCxAMyZAEy...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAEAAElEQVR42sS9Z7hlR3E1XNVhpxNvnjyjiFAGkTFZJltkk8EvYDAIhMlggo2xAWOCsYkmG...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAABVi0lEQVR42r29d6ClZ1UvvNZT3rbr6WV6S5lk0guYkNAMGKQGFAQboqBcr+Ve1KvyeYtc9...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "NFH2-A2-182-OSP-500",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        15,
        "Power & Fiber Armored Bulk Cable"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 1599.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1475
      ],
      "product_variant_id": [
        1475,
        "NFH2-A2-182-OSP-500"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a01,839.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "2 Strand Singlemode Plus 18AWG Hybrid Power in ONE Jacket and protected by Stainless Steel Armored Fiber Cable 500 Foot Reel\n\nThe P2P 2-Strand SM G657A2 + 2C 18AWG Composite Cable \nis the ultimate hybrid solution for delivering both power and data in one ruggedized armored package. Designed for harsh outdoor and OSP environments, this cable integrates high-performance singlemode G657.A2 fiber and 18AWG copper conductors within a single, armored sheath\u2014eliminating the need for multiple cable runs or conduit systems. \n\nThe internal fiber is housed in a spiral stainless steel tube, providing outstanding crush resistance and rodent protection, while water-blocking tape and Kevlar strength members ensure long-term reliability in moisture-prone and high-tension installations. \n\nThis cable is ideal for powering edge devices such as broadcast & IP cameras, wireless access points, remote sensors, and small enclosures that require both connectivity and DC power. \n\nFor installers, this means fewer labor hours, faster deployment, and no hassle transitioning between power and data cables\u2014everything is pre-bundled for simplicity. \n\nCustomers benefit from lower material costs, streamlined project design, and a rugged composite cable that\u2019s built to withstand outdoor abuse without sacrificing performance. Whether trenching, mounting in conduit, or deploying overhead, this armored P2P cable ensures maximum uptime, durability, and installation speed\u2014all in one hybrid line.\n\nFeatures:\n\u2022 500 Foot Reel\n\u2022 Power & Fiber under ONE Jacket\n\u2022 Singlemode\n\u2022 2 Strand\n\u2022 18 AWG Copper Conductor\n\u2022 Stainless Steel Armor\n\u2022 Tight Buffer\n\u2022 Bend Insensitive G657A2\n\u2022 Water Blocking\n\u2022 Fiber Sub Unit LSZH\n\u2022 Outer Jacket TPE Black\n\u2022 Smallest outer diameter armored cable\n\u2022 Outer Diameter 10.0mm\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "1159.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1EqwZJ",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "China",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "56lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "875",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044223",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1516,
      "display_name": "NFR48-SMA2-P-YL-1000",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/nfr48-sma2-p-yl-1000-1516",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/nfr48-sma2-p-yl-1000-1516",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_1024": "/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_512": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_256": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_128": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "NFR48-SMA2-P-YL-1000",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        16,
        "Rollable Ribbon Fiber Optic Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 5999.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1481
      ],
      "product_variant_id": [
        1481,
        "NFR48-SMA2-P-YL-1000"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a06,899.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "48 Strand 250um Rollable Ribbon SM/657.A2 1000 Foot Reel with Passivated Metallic Cladding Indoor Plenum OFCP Yellow Jacket\n\nThe P2P 48-Strand Rollable Ribbon SM G657.A2 Armored\n Fiber Cable is a game-changing solution for high-density backbone deployments where fast mass fusion splicing, mechanical durability, and space efficiency are mission critical. Featuring flexible 250\u00b5m rollable ribbon fiber arranged in a compact single-binder format, this cable offers the installer all the high-speed splicing benefits of traditional ribbon\u2014with the bend flexibility and density of loose tube designs. \n\nProtected by a passivated stainless steel spiral armor, UV-resistant OFCP-rated yellow jacket, water-swellable tape, and Kevlar reinforcement, this cable is engineered for maximum reliability in demanding indoor plenum spaces where tight pathways, rodent threats, or building code requirements pose major challenges. \n\nFor customers, it simplifies large-scale fiber builds, speeds up splicing workflows, reduces rack congestion, and enhances long-term network performance with low bend loss G657.A2 glass. For installers, the cable dramatically reduces labor and prep time at splice enclosures by enabling 12-fiber mass fusions per ribbon layer, while maintaining flexibility for easy pulling, bending, and routing. Whether used in data centers, campus networks, or enterprise risers, this rollable ribbon cable delivers the perfect balance of protection, performance, and productivity in a compact armored form factor.\n\nFeatures:\n\u2022 1000 Foot Reel\n\u2022 Fiber Count: 48 Fibers (4 \u00d7 12F Rollable Ribbon)\n\u2022 Fiber Type: Singlemode G657.A2, 250\u00b5m Rollable Ribbon\n\u2022 Compliance: TIA/EIA-568, RoHS, R\n\u2022 EACH, TSCA, UL OFCP\n\u2022 Applications:Indoor risers, data centers, patch panels, MDU/FTTx\n\u2022 4.6mm outer diameter\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "4279.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1lJxPPv4z",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "53lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "3210",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044261",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1514,
      "display_name": "NFR48-SMA2-P-YL-250",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/nfr48-sma2-p-yl-250-1514",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/nfr48-sma2-p-yl-250-1514",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_1024": "/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_512": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_256": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_128": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "NFR48-SMA2-P-YL-250",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        16,
        "Rollable Ribbon Fiber Optic Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 1599.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1479
      ],
      "product_variant_id": [
        1479,
        "NFR48-SMA2-P-YL-250"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a01,839.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "48 Strand 250um Rollable Ribbon SM/657.A2 250 Foot Reel \nwith Passivated Metallic Cladding Indoor Plenum OFCP Yellow Jacket\n\nThe P2P 48-Strand Rollable Ribbon SM G657.A2 Armored\n Fiber Cable is a game-changing solution for high-density backbone deployments where fast mass fusion splicing, mechanical durability, and space efficiency are mission critical. Featuring flexible 250\u00b5m rollable ribbon fiber arranged in a compact single-binder format, this cable offers the installer all the high-speed splicing benefits of traditional ribbon\u2014with the bend flexibility and density of loose tube designs. \n\nProtected by a passivated stainless steel spiral armor, UV-resistant OFCP-rated yellow jacket, water-swellable tape, and Kevlar reinforcement, this cable is engineered for maximum reliability in demanding indoor plenum spaces where tight pathways, rodent threats, or building code requirements pose major challenges. \n\nFor customers, it simplifies large-scale fiber builds, speeds up splicing workflows, reduces rack congestion, and enhances long-term network performance with low bend loss G657.A2 glass. For installers, the cable dramatically reduces labor and prep time at splice enclosures by enabling 12-fiber mass fusions per ribbon layer, while maintaining flexibility for easy pulling, bending, and routing. Whether used in data centers, campus networks, or enterprise risers, this rollable ribbon cable delivers the perfect balance of protection, performance, and productivity in a compact armored form factor.\n\nFeatures:\n\u2022 250 Foot Reel\n\u2022 Fiber Count: 48 Fibers (4 \u00d7 12F Rollable Ribbon)\n\u2022 Fiber Type: Singlemode G657.A2, 250\u00b5m Rollable Ribbon\n\u2022 Compliance: TIA/EIA-568, RoHS, R\n\u2022 EACH, TSCA, UL OFCP\n\u2022 Applications:Indoor risers, data centers, patch panels, MDU/FTTx\n\u2022 4.6mm outer diameter\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "1069.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1lJxPPv4z",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "16lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "802",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044247",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1515,
      "display_name": "NFR48-SMA2-P-YL-500",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/nfr48-sma2-p-yl-500-1515",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/nfr48-sma2-p-yl-500-1515",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_1024": "/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_512": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_256": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_128": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "NFR48-SMA2-P-YL-500",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        16,
        "Rollable Ribbon Fiber Optic Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 3099.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1480
      ],
      "product_variant_id": [
        1480,
        "NFR48-SMA2-P-YL-500"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a03,564.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "48 Strand 250um Rollable Ribbon SM/657.A2 500 Foot Reel with  Passivated Metallic Cladding Indoor Plenum OFCP Yellow Jacket\n\nThe P2P 48-Strand Rollable Ribbon SM G657.A2 Armored\n Fiber Cable is a game-changing solution for high-density backbone deployments where fast mass fusion splicing, mechanical durability, and space efficiency are mission critical. Featuring flexible 250\u00b5m rollable ribbon fiber arranged in a compact single-binder format, this cable offers the installer all the high-speed splicing benefits of traditional ribbon\u2014with the bend flexibility and density of loose tube designs. \n\nProtected by a passivated stainless steel spiral armor, UV-resistant OFCP-rated yellow jacket, water-swellable tape, and Kevlar reinforcement, this cable is engineered for maximum reliability in demanding indoor plenum spaces where tight pathways, rodent threats, or building code requirements pose major challenges. \n\nFor customers, it simplifies large-scale fiber builds, speeds up splicing workflows, reduces rack congestion, and enhances long-term network performance with low bend loss G657.A2 glass. For installers, the cable dramatically reduces labor and prep time at splice enclosures by enabling 12-fiber mass fusions per ribbon layer, while maintaining flexibility for easy pulling, bending, and routing. Whether used in data centers, campus networks, or enterprise risers, this rollable ribbon cable delivers the perfect balance of protection, performance, and productivity in a compact armored form factor.\n\nFeatures:\n\u2022 500 Foot Reel\n\u2022 Fiber Count: 48 Fibers (4 \u00d7 12F Rollable Ribbon)\n\u2022 Fiber Type: Singlemode G657.A2, 250\u00b5m Rollable Ribbon\n\u2022 Compliance: TIA/EIA-568, RoHS, R\n\u2022 EACH, TSCA, UL OFCP\n\u2022 Applications:Indoor risers, data centers, patch panels, MDU/FTTx\n\u2022 4.6mm outer diameter\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "2149.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1lJxPPv4z",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "28lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "1605",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044254",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1524,
      "display_name": "NFT-032",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/nft-032-1524",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/nft-032-1524",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABgkAAASlCAYAAACStTnVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEsmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94c...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAMUCAYAAAAi/VWAAAEAAElEQVR42uz9aZMlSZYdiB29qmr2NnePjOyqruoudAMgOOSAJD7w0wiFpAi/8FdTZERIC...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAGKCAYAAAB6u/nZAAEAAElEQVR42uz96bMt6XXeif3eKTP3cMY71gwUBgKcRFFUS6GWLIUtuzuiI/zF7Qj7s/0/O...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAYAAAC7ICzVAACEoUlEQVR42uz9WYwkWZamiX13ExFVtdXNfA338AiPfcuMzKzMrH2Z6mEvbE6jOQ1iQJCD5...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAABjCAYAAABT7gjnAAAkYElEQVR42u2de4xl2VXef2vvfc69detWVVe/u2d6enrGYI9nGJuxg43ADAO2edjCYMABA...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "NFT-032",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        20,
        "Accessory Tools"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 59.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1489
      ],
      "product_variant_id": [
        1489,
        "NFT-032"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": true,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a068.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "Re-Spiral Stainless Steel Armored Tooling to create the cut point. Each set contains 5 holders suitable from 0.5mm~3.2mm\n\nRe-Spiral Stainless Steel Armor Tooling Set \nfor Armored Tube O.D. 0.5mm to 3.2mm\n\nThe Re-Spiral Armored Tooling Set is an essential tool for fiber optic cable technicians, network installers, and assembly engineers working with stainless steel spiral-armored fiber cables. Designed to manage the final stage of armored cable preparation, this specialized tool enables precise unwinding (de-spiraling) or re-aligning (re-spiraling) of the exposed stainless steel tube once the outer jacket is stripped away. It provides clean, consistent reshaping of the metal armor to ensure it\u2019s ready for connectorization, termination, or protective jacket reapplication without causing kinks, pinches, or stress on the fiber subunits inside.\n\nEach tooling kit includes five interchangeable holders, making it universally compatible with a wide range of armored tube outer diameters from 0.5mm to 3.2mm. This allows technicians to confidently handle various cable sizes and armor thicknesses with one convenient kit. The holders are precision-engineered to gently cradle and guide the armored layer, preventing damage while providing controlled, manual reshaping. Whether you\u2019re retrofitting field cables, assembling custom patch cords, or preparing for connector installation in the factory, this tool streamlines the process and ensures professional-grade results.\n\nThe compact, field-ready design makes it easy to use in tight spaces or in portable repair kits, while the durable construction guarantees long-term service life even under high-volume use.\n\nFeatures:\n\u2022 Compatible with stainless steel spiral\n\u2022 tube armor O.D. 0.5mm to 3.2mm\n\u2022 five interchangeable holders\n\u2022 Enables controlled re-spiraling or unwinding of exposed armor\n\u2022 Prevents overbending, deformation, and fiber stress\n\u2022 Portable, durable, and easy to integrate into field tool kits\n\u2022 Saves time and simplifies armored cable preparation",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "42.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=10XFEYYaYavhxCFyuxidbalPnJN6llRJo",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "China",
      "x_studio_width_inches": "7\"",
      "x_studio_weight_lbs": "0.05lbs.",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "32",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "10\"",
      "x_studio_height_inches": "4\"",
      "x_studio_upc_code": "743634044339",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "1 Year",
      "x_studio_length_available": false
    },
    {
      "id": 1525,
      "display_name": "NFT-60",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/nft-60-1525",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/nft-60-1525",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABgkAAASlCAYAAACStTnVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEsmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94c...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAMUCAYAAAAi/VWAAAEAAElEQVR42uz9a3vkOJIkChsAknGRlFnVNbv7/v8/ds7Z3p3prqpMSXHhDbf3A+CgE0Ioq...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAGKCAYAAAB6u/nZAAEAAElEQVR42uz9Z7ckWXYdCG7T5vrJiMioFKWABgGCIJtsruk1H6Z/+Uz3cLrRIBQLJVJFh...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAYAAAC7ICzVAACpf0lEQVR42uz997NkSXYeCH7uflXoiCdTVFZlVmZVV4tqrYHuZqMBNAmAIAkOtZZDo+3sC...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAABjCAYAAABT7gjnAAA04UlEQVR42u29ebBlWVbe99t7n+mOb8ihcqqsyqx57Kqurq4uep4Hmu52gwhkJEuWTGAEM...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "NFT-60",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        20,
        "Accessory Tools"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 79.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1490
      ],
      "product_variant_id": [
        1490,
        "NFT-60"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": true,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a091.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "Re-Spiral Armored Tooling for armored tube O.D. >3.2mm. Size adjustment by  tightening the tool to fit the armored layer.\n\nThe Re-Spiral Adjustable Armored Tooling is a professional \ngrade tool designed for the preparation and management of large-diameter stainless steel spiral-armored fiber optic cables. Engineered specifically for cables with armored layer outer diameters greater than 3.2mm, this tool allows technicians to re-shape, unwind, or re-align exposed armored tubing with precision and control\u2014ensuring the armor is cleanly managed after the outer jacket is removed for termination, splicing, or connectorization.\n\nUnlike fixed-holder sets, this enhanced version features a built-in adjustment mechanism that allows users to tighten or loosen the tool to match the specific armored layer diameter by simply turning the adjustment part\u2014eliminating the need to swap out different holders for each cable size. This saves time, reduces tool clutter, and ensures quick adaptation in the field or production environment.\n\nIdeal for fiber patch cable prep, armored field termination, OSP splicing trays, military assemblies, or broadcast-grade rugged cabling, the tool maintains a tight grip on the spiral tube while guiding it into an open and manageable shape\u2014without damaging the armor or the internal fibers. With rugged, field-proven construction and easy-to-use ergonomics, this adjustable re-spiraling tool is an indispensable asset for technicians working on heavy-duty or custom armored cable installations.\n\nFeatures:\n\u2022 Compatible with stainless steel spiral\n\u2022 tube armor O.D. > 3.2mm\n\u2022 No need to change holders \u2013 adjust sizing by rotating the integrated dial\n\u2022 Enables controlled re-spiraling or unwinding of exposed armor\n\u2022 Prevents overbending, deformation, and fiber stress\n\u2022 Portable, durable, and easy to integrate into field tool kits\n\u2022 Saves time and simplifies armored cable preparation",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "51.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1ym7R6v",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "China",
      "x_studio_width_inches": "7\"",
      "x_studio_weight_lbs": "1.0lbs.",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "39",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "10\"",
      "x_studio_height_inches": "4\"",
      "x_studio_upc_code": "743634044346",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "1 Year",
      "x_studio_length_available": false
    },
    {
      "id": 1522,
      "display_name": "P2P-C6AS-A-24AWG-OSP-25",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/p2p-c6as-a-24awg-osp-25-1522",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/p2p-c6as-a-24awg-osp-25-1522",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAAASQAAAEkCAYAAACG+UzsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAKKYS...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAAASQAAAEkCAYAAACG+UzsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAKKYS...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAASQAAAEkCAYAAACG+UzsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAKKYS...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAB4hUlEQVR42u29d5Bl13kf+Lvh5dTvdc5hcgY4CAQIkIQEUqu01pIWV2vKFiVyy2uXJLvkU...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAsYklEQVR42u29eZBkV3nm/btb3ptbZWZVZS1dVb1Vb1K3ulBLahqkkUXIHxgwDOOJkBnMG...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "P2P-C6AS-A-24AWG-OSP-25",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        31,
        "CAT6a ARMORED"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 69.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1487
      ],
      "product_variant_id": [
        1487,
        "P2P-C6AS-A-24AWG-OSP-25"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a080.49 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "Direct Burial Armored Cat6a U/FTP with Passivated \nMetallic Cladding \u2013 25ft (up to 150 ft )Outdoor Patch\n\nP2P's Direct Burial 25 Foot Cat6a U/FTP Installation Cable features an internal\n passivated metallic cladding armor beneath a rugged black outdoor-rated jacket, delivering advanced protection against rodents, crushing, and trenching damage. \n\nThis solution solves the common failure points of outdoor Ethernet by safeguarding the internal pairs and shielding from EMI, while maintaining signal integrity for 10-Gigabit Ethernet and PoE++ applications across extended distances.\n\nUnlike bulkier armored options, this slim-profile cladding enables flexible trench or conduit placement without the risk of cable collapse or fiber loss. \n\nWhether you're installing in harsh weather, rocky terrain, or pest-prone rural areas, this cable ensures long-lasting uptime and zero maintenance headaches.\n\nFeatures:\n\u2022 Passivated Metallic Cladding (Under Jacket): Superior rodent, crush, and abrasion resistance without added bulk\n\u2022 Cable Length: 25 Feet\n\u2022 Direct Burial Rated\tIdeal for underground, trench, or outdoor conduit installations\n\u2022 Black PE/TPU Outer Jacket\tUV-resistant, moisture-blocking jacket for long-term durability\n\u2022 Cat6a U/FTP Shielding: Enhanced noise immunity and EMI protection for high-signal environments\n\u2022 Supports 10GbE + PoE++, Reliable power and data transmission over long distances\n\u2022 Pre-Cut 25ft to 150ft Lengths\tSaves time on job sites with ready-to-deploy patch cable lengths\n\u2022 Slim Armored Profile: Easier pull-through and bending than traditional corrugated armor",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "44.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1zsXQ9NskjzVgPhckh5n3vMrl54cFD1Hp",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "China",
      "x_studio_width_inches": "11\"",
      "x_studio_weight_lbs": "1.7lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "34",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "13\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634043530",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1523,
      "display_name": "P2P-C6AS-A-24AWG-OSP-75",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/p2p-c6as-a-24awg-osp-75-1523",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/p2p-c6as-a-24awg-osp-75-1523",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAAASQAAAEkCAYAAACG+UzsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAKKYS...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAAASQAAAEkCAYAAACG+UzsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAKKYS...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAASQAAAEkCAYAAACG+UzsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAKKYS...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAB4hUlEQVR42u29d5Bl13kf+Lvh5dTvdc5hcgY4CAQIkIQEUqu01pIWV2vKFiVyy2uXJLvkU...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAsYklEQVR42u29eZBkV3nm/btb3ptbZWZVZS1dVb1Vb1K3ulBLahqkkUXIHxgwDOOJkBnMG...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "P2P-C6AS-A-24AWG-OSP-75",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        31,
        "CAT6a ARMORED"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 99.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1488
      ],
      "product_variant_id": [
        1488,
        "P2P-C6AS-A-24AWG-OSP-75"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a0114.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": -1,
      "incoming_qty": 0,
      "outgoing_qty": 1,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 1,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "Direct Burial Armored Cat6a U/FTP with Passivated \nMetallic Cladding \u2013 75ft (up to 150 ft )Outdoor Patch\n\nP2P's Direct Burial 75 Foot Cat6a U/FTP Installation Cable features an internal\n passivated metallic cladding armor beneath a rugged black outdoor-rated jacket, delivering advanced protection against rodents, crushing, and trenching damage. \n\nThis solution solves the common failure points of outdoor Ethernet by safeguarding the internal pairs and shielding from EMI, while maintaining signal integrity for 10-Gigabit Ethernet and PoE++ applications across extended distances.\n\nUnlike bulkier armored options, this slim-profile cladding enables flexible trench or conduit placement without the risk of cable collapse or fiber loss. \n\nWhether you're installing in harsh weather, rocky terrain, or pest-prone rural areas, this cable ensures long-lasting uptime and zero maintenance headaches.\n\nFeatures:\n\u2022 Passivated Metallic Cladding (Under Jacket): Superior rodent, crush, and abrasion resistance without added bulk\n\u2022 Cable Length 75 Feet\n\u2022 Direct Burial Rated\tIdeal for underground, trench, or outdoor conduit installations\n\u2022 Black PE/TPU Outer Jacket\tUV-resistant, moisture-blocking jacket for long-term durability\n\u2022 Cat6a U/FTP Shielding: Enhanced noise immunity and EMI protection for high-signal environments\n\u2022 Supports 10GbE + PoE++, Reliable power and data transmission over long distances\n\u2022 Pre-Cut 25ft to 150ft Lengths\tSaves time on job sites with ready-to-deploy patch cable lengths\n\u2022 Slim Armored Profile: Easier pull-through and bending than traditional corrugated armor",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "69.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1zsXQ9NskjzVgPhckh5n3vMrl54cFD1Hp",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "China",
      "x_studio_width_inches": "11\"",
      "x_studio_weight_lbs": "5.1lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "52",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "13\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634043561",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1519,
      "display_name": "P2P-NR48-A1-2X-PL-1000",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/p2p-nr48-a1-2x-pl-1000-1519",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/p2p-nr48-a1-2x-pl-1000-1519",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_1024": "/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_512": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_256": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_128": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "P2P-NR48-A1-2X-PL-1000",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        30,
        "Rollable Ribbon Fiber Optic Non Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 3099.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1484
      ],
      "product_variant_id": [
        1484,
        "P2P-NR48-A1-2X-PL-1000"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a03,564.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "48 Strand 250um Rollable Ribbon Singlemode 657.A2 1000 Foot Reel NON Armored Indoor Plenum OFCP Yellow Jacket\n\nThe P2P 48-Strand Rollable Ribbon SM G657.A2 Indoor \nPlenum Fiber Cable is purpose-built for high-density installations where flexibility, speed, and space efficiency are critical but metallic armor is not required. \n\nThis non-armored cable uses 250\u00b5m rollable ribbon fiber, arranged in a single-binder configuration of 4 \u00d7 12 fibers, allowing for mass fusion splicing to dramatically reduce installation time and simplify fiber management. Its OFCP-rated yellow plenum jacket complies with building codes for indoor use in air-handling spaces while offering a lightweight, easy-to-pull design that\u2019s ideal for conduit, raceways, and vertical risers. Installers benefit from the cable\u2019s exceptional bend radius, low memory, and reduced weight, which make it effortless to route through tight spaces and dense patch environments. \n\nFor customers, this design offers long-term scalability and optical performance, supported by G657.A2 bend-insensitive glass that minimizes signal loss in tight routing. Perfect for data centers, cross-connects, telecom closets, or backbone links in large buildings, this cable provides a streamlined solution for high-fiber-count applications without the added cost or rigidity of armored constructions.\n\nFeatures:\n\u2022 1000 Foot Reel\n\u2022 48-Strand\n\u2022 Rollable Ribbon\n\u2022 SM G657.A2 bend-insensitive glass that minimizes signal loss in tight routing\n\u2022 Single-binder configuration of 4 \u00d7 12 fibers,\n\u2022 250\u00b5m rollable ribbon fiber\n\u2022 5.5mm outer diameter\n\u2022 Allowing for mass fusion splicing to Dramatically reduce installation time\n\u2022 OFCP-rated yellow plenum jacket complies with building codes for indoor use in air-handling spaces\n\u2022 Applications: Indoor risers, plenum pathways, patch panels, high-density splicing trays, cross-connects, data centers, backbone trunking\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "2199.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1RN0SAFkUV_n1hfKqLGTPHvNvtTJ",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "39lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "1650",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044292",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1517,
      "display_name": "P2P-NR48-A1-2X-PL-250",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/p2p-nr48-a1-2x-pl-250-1517",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/p2p-nr48-a1-2x-pl-250-1517",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_1024": "/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_512": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_256": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_128": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "P2P-NR48-A1-2X-PL-250",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        30,
        "Rollable Ribbon Fiber Optic Non Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 799.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1482
      ],
      "product_variant_id": [
        1482,
        "P2P-NR48-A1-2X-PL-250"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a0919.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "48 Strand 250um Rollable Ribbon  Singlemode 657.A2  250 Foot Reel NON Armored Indoor Plenum OFCP Yellow Jacket\n\nThe P2P 48-Strand Rollable Ribbon SM G657.A2 Indoor \nPlenum Fiber Cable is purpose-built for high-density installations where flexibility, speed, and space efficiency are critical but metallic armor is not required. \n\nThis non-armored cable uses 250\u00b5m rollable ribbon fiber, arranged in a single-binder configuration of 4 \u00d7 12 fibers, allowing for mass fusion splicing to dramatically reduce installation time and simplify fiber management. Its OFCP-rated yellow plenum jacket complies with building codes for indoor use in air-handling spaces while offering a lightweight, easy-to-pull design that\u2019s ideal for conduit, raceways, and vertical risers. Installers benefit from the cable\u2019s exceptional bend radius, low memory, and reduced weight, which make it effortless to route through tight spaces and dense patch environments. \n\nFor customers, this design offers long-term scalability and optical performance, supported by G657.A2 bend-insensitive glass that minimizes signal loss in tight routing. Perfect for data centers, cross-connects, telecom closets, or backbone links in large buildings, this cable provides a streamlined solution for high-fiber-count applications without the added cost or rigidity of armored constructions.\n\nFeatures:\n\u2022 250 Foot Reel\n\u2022 48-Strand\n\u2022 Rollable Ribbon\n\u2022 SM G657.A2 bend-insensitive glass that minimizes signal loss in tight routing\n\u2022 Single-binder configuration of 4 \u00d7 12 fibers,\n\u2022 250\u00b5m rollable ribbon fiber\n\u2022 Allowing for mass fusion splicing to Dramatically reduce installation time\n\u2022 OFCP-rated yellow plenum jacket complies with building codes for indoor use in air-handling spaces\n\u2022 Applications: Indoor risers, plenum pathways, patch panels, high-density splicing trays, cross-connects, data centers, backbone trunking\n\u2022 5.5mm outer diameter\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "549.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1RN0SAFkUV_n1hfKqLGTPHvNvtTJ",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "14lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "412,5",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044278",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1518,
      "display_name": "P2P-NR48-A1-2X-PL-500",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/p2p-nr48-a1-2x-pl-500-1518",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/p2p-nr48-a1-2x-pl-500-1518",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_1024": "/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_512": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_256": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_128": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "P2P-NR48-A1-2X-PL-500",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        30,
        "Rollable Ribbon Fiber Optic Non Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 1599.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1483
      ],
      "product_variant_id": [
        1483,
        "P2P-NR48-A1-2X-PL-500"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a01,839.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "48 Strand 250um Rollable Ribbon Singlemode 657.A2 500 Foot Reel NON Armored Indoor Plenum OFCP Yellow Jacket\n\nThe P2P 48-Strand Rollable Ribbon SM G657.A2 Indoor \nPlenum Fiber Cable is purpose-built for high-density installations where flexibility, speed, and space efficiency are critical but metallic armor is not required. \n\nThis non-armored cable uses 250\u00b5m rollable ribbon fiber, arranged in a single-binder configuration of 4 \u00d7 12 fibers, allowing for mass fusion splicing to dramatically reduce installation time and simplify fiber management. Its OFCP-rated yellow plenum jacket complies with building codes for indoor use in air-handling spaces while offering a lightweight, easy-to-pull design that\u2019s ideal for conduit, raceways, and vertical risers. Installers benefit from the cable\u2019s exceptional bend radius, low memory, and reduced weight, which make it effortless to route through tight spaces and dense patch environments. \n\nFor customers, this design offers long-term scalability and optical performance, supported by G657.A2 bend-insensitive glass that minimizes signal loss in tight routing. Perfect for data centers, cross-connects, telecom closets, or backbone links in large buildings, this cable provides a streamlined solution for high-fiber-count applications without the added cost or rigidity of armored constructions.\n\nFeatures:\n\u2022 500 Foot Reel\n\u2022 48-Strand\n\u2022 Rollable Ribbon\n\u2022 SM G657.A2 bend-insensitive glass that minimizes signal loss in tight routing\n\u2022 Single-binder configuration of 4 \u00d7 12 fibers,\n\u2022 250\u00b5m rollable ribbon fiber\n\u2022 Allowing for mass fusion splicing to Dramatically reduce installation time\n\u2022 OFCP-rated yellow plenum jacket complies with building codes for indoor use in air-handling spaces\n\u2022 Applications: Indoor risers, plenum pathways, patch panels, high-density splicing trays, cross-connects, data centers, backbone trunking\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "1099.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1RN0SAFkUV_n1hfKqLGTPHvNvtTJ",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "22lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "825",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044285",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1528,
      "display_name": "P2P-PT12-LCU-OM3-1M",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/p2p-pt12-lcu-om3-1m-1528",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/p2p-pt12-lcu-om3-1m-1528",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABgkAAASlCAYAAACStTnVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEvWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94c...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAMUCAYAAAAi/VWAAAEAAElEQVR42uz9aZOjSbKdCT6qZvYuWHyJLTNru/d2c2t2///fMjNk912rKjMjwt2xvZstO...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAGKCAYAAAB6u/nZAAEAAElEQVR42uz9Z7Bl2XmeCT5rbb/38e56kze9z6ysyvIFoOA9RJEyI7bEVis61B3TomJar...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAYAAAC7ICzVAADWK0lEQVR42uy9d4CcZ3nu/Xv79D7b+656L1az5d5twJjeAiEQUkg5OScVckL4Dl9OElJII...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAABjCAYAAABT7gjnAABCUUlEQVR42u29d7Al133f+Tmn880v5zfvTR5gBjkQIEESIEFSJEVSoihKsuRVWXG1kmV77...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "P2P-PT12-LCU-OM3-1M",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": false,
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 34.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1493
      ],
      "product_variant_id": [
        1493,
        "P2P-PT12-LCU-OM3-1M"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": true,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a040.24 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "1M 12-Fiber LC/UPC OM3 50/125\u03bcm Breakout Fanout Patch \nCable \u2013 Aqua Jacket for High-Speed Multimode Networks\n\n12-pack of 1-meter LC/UPC OM3 fiber optic pigtails in multicolor \nfor easy fiber identification. \n\nThe P2P-PT12-LCU-OM3-1M is a premium-quality 1-meter 12-fiber \nbreakout patch cable designed for high-speed multimode networking in data centers, enterprise backbones, and telecom rooms. \n\nFeaturing LC/UPC connectors and constructed with OM3 50/125\u03bcm multimode fiber, this aqua-jacketed fanout assembly enables low-loss, parallel connections for 40G/100G transceivers or MTP/MPO cassettes. \n\nEach fiber branch is individually jacketed for protection, flexibility, and easy routing in dense rack environments. \n\nThe factory-tested connectors ensure low insertion loss and high return loss, while the tight-buffered, riser-rated design makes it ideal for both horizontal and vertical cabling. \n\nBuilt to exceed industry standards, this cable is perfect for applications requiring space-efficient fiber distribution with high bandwidth performance.\n\nFeatures:\n\u2022 12-Fiber LC/UPC Fanout Assembly: Enables high-density connections for parallel optics and breakout panels\n\u2022 OM3 50/125\u03bcm Multimode Fiber; Optimized for 10G/40G/100G data transmission with low attenuation\n\u2022 Individually Jacketed Fibers; Simplifies cable management and reduces risk of damage during handling\n\u2022 Aqua Outer Jacket; Color-coded for OM3 compliance and quick identification\n\u2022 Low Insertion & High Return Loss; Ensures reliable signal integrity and minimal loss in critical applications\n\u2022 1-Meter Length; Ideal for rack-to-rack patching in compact data center configurations",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "29.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1y6PH8s8nmja5_8xPGcEM41WyG1",
      "x_studio_purchase_measure": false,
      "x_studio_country_of_origin": false,
      "x_studio_width_inches": false,
      "x_studio_weight_lbs": false,
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "23",
      "x_studio_moq_minimum_order_quantity": false,
      "x_studio_length_inches": false,
      "x_studio_height_inches": false,
      "x_studio_upc_code": "743634044407",
      "x_studio_ship_ups_or_freight": false,
      "x_studio_warranty": "1 Year",
      "x_studio_length_available": false
    },
    {
      "id": 1526,
      "display_name": "P2P-PT12-LCU-SM-XM",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/p2p-pt12-lcu-sm-xm-1526",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/p2p-pt12-lcu-sm-xm-1526",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABgkAAASlCAYAAACStTnVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEvWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94c...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAMUCAYAAAAi/VWAAAEAAElEQVR42uz9aZOjSbKdCT6qZvYuWHyJLTNru/d2c2t2///fMjNk912rKjMjwt2xvZstO...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAGKCAYAAAB6u/nZAAEAAElEQVR42uz9Z7Bl2XmeCT5rbb/38e56kze9z6ysyvIFoOA9RJEyI7bEVis61B3TomJar...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAYAAAC7ICzVAADWK0lEQVR42uy9d4CcZ3nu/Xv79D7b+656L1az5d5twJjeAiEQUkg5OScVckL4Dl9OElJII...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAABjCAYAAABT7gjnAABCUUlEQVR42u29d7Al133f+Tmn880v5zfvTR5gBjkQIEESIEFSJEVSoihKsuRVWXG1kmV77...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "P2P-PT12-LCU-SM-XM",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": false,
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 29.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1491
      ],
      "product_variant_id": [
        1491,
        "P2P-PT12-LCU-SM-XM"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": true,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a034.49 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": -1,
      "incoming_qty": 0,
      "outgoing_qty": 1,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 1,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "12-Pack 1m LC/UPC Singlemode Multicolor Pigtail \u2013 Non-Jacketed, \nCeramic Ferrule, Fusion-Ready\n\n12-pack of 1-meter LC/UPC singlemode fiber optic pigtails in multicolor \nfor easy fiber identification. \n\nDesigned for telecom, data center, and FTTH applications, each pigtail features a 0.9mm non-jacketed buffer, high-performance ceramic (zirconia) ferrule, and UPC polished LC connector. Engineered for precision fusion splicing, these pigtails are fully compatible with the P2P Camo Fusion Splicer and meet ISO9001 and RoHS compliance standards. \n\nWith low insertion loss and high return loss, they ensure minimal signal degradation, even in mission-critical environments. Ideal for fusion splicing in builds from 1 to 12 strands, this 12-pack supports scalable installations with clear color coding and professional-grade performance.\n\nFeatures:\n\u2022 Sold as a 12-pack for use across\n\u2022 all strand counts\n\u2022 Pre-terminated LC/UPC connectors \u2013 ideal for fusion splicing\n\u2022 Fully compatible with P2P Camo Fusion Splicer\n\u2022 12 distinct colors for fast strand identification\n\u2022 Ceramic zirconia ferrule for reliable core alignment\n\u2022 Low insertion loss (\u2264 0.30 dB) for signal integrity\n\u2022 High return loss (\u2265 55 dB) for minimal reflection\n\u2022 Non-jacketed 0.9mm fiber with minimal footprint\n\u2022 Operating temperature range: -20\u00b0C to +70\u00b0C",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "19.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1NUGdXQOPxM2A2c",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": false,
      "x_studio_weight_lbs": false,
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "15",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": false,
      "x_studio_height_inches": false,
      "x_studio_upc_code": "743634044384",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "1 Year",
      "x_studio_length_available": false
    },
    {
      "id": 1529,
      "display_name": "P2P-PT12-SCU-OM3-1M",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/p2p-pt12-scu-om3-1m-1529",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/p2p-pt12-scu-om3-1m-1529",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABgkAAASlCAYAAACStTnVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEsmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94c...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAMUCAYAAAAi/VWAAAEAAElEQVR42uz9a3vkOJIkChsAknGRlFnVNbv7/v8/ds7Z3p3prqpMSXHhDbf3A+CgE0Ioq...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAGKCAYAAAB6u/nZAAEAAElEQVR42uz9Z7ckWXYdCG7T5vrJiMioFKWABgGCIJtsruk1H6Z/+Uz3cLrRIBQLJVJFh...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAYAAAC7ICzVAACpf0lEQVR42uz997NkSXYeCH7uflXoiCdTVFZlVmZVV4tqrYHuZqMBNAmAIAkOtZZDo+3sC...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAABjCAYAAABT7gjnAAA04UlEQVR42u29ebBlWVbe99t7n+mOb8ihcqqsyqx57Kqurq4uep4Hmu52gwhkJEuWTGAEM...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "P2P-PT12-SCU-OM3-1M",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": false,
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 34.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1494
      ],
      "product_variant_id": [
        1494,
        "P2P-PT12-SCU-OM3-1M"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": true,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a040.24 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "1M 12-Fiber SC/UPC OM3 50/125\u03bcm Breakout Fanout Patch \nCable \u2013 Aqua Jacket for High-Speed Multimode Networks\n\n12-pack of 1-meter SC/UPC OM3 fiber optic pigtails in multicolor \nfor easy fiber identification. \n\nThe P2P-PT12-SCU-OM3-1M is a premium-quality 1-meter 12-fiber \nbreakout patch cable designed for high-speed multimode networking in data centers, enterprise backbones, and telecom rooms. \n\nFeaturing SC/UPC connectors and constructed with OM3 50/125\u03bcm multimode fiber, this aqua-jacketed fanout assembly enables low-loss, parallel connections for 40G/100G transceivers or MTP/MPO cassettes. \n\nEach fiber branch is individually jacketed for protection, flexibility, and easy routing in dense rack environments. \n\nThe factory-tested connectors ensure low insertion loss and high return loss, while the tight-buffered, riser-rated design makes it ideal for both horizontal and vertical cabling. \n\nBuilt to exceed industry standards, this cable is perfect for applications requiring space-efficient fiber distribution with high bandwidth performance.\n\nFeatures:\n\u2022 12-Fiber SC/UPC Fanout Assembly: Enables high-density connections for parallel optics and breakout panels\n\u2022 OM3 50/125\u03bcm Multimode Fiber; Optimized for 10G/40G/100G data transmission with low attenuation\n\u2022 Individually Jacketed Fibers; Simplifies cable management and reduces risk of damage during handling\n\u2022 Aqua Outer Jacket; Color-coded for OM3 compliance and quick identification\n\u2022 Low Insertion & High Return Loss; Ensures reliable signal integrity and minimal loss in critical applications\n\u2022 1-Meter Length; Ideal for rack-to-rack patching in compact data center configurations",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "29.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1VDjHLJcrn1CkJkzbKKA1gTPXO",
      "x_studio_purchase_measure": false,
      "x_studio_country_of_origin": false,
      "x_studio_width_inches": false,
      "x_studio_weight_lbs": false,
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "23",
      "x_studio_moq_minimum_order_quantity": false,
      "x_studio_length_inches": false,
      "x_studio_height_inches": false,
      "x_studio_upc_code": "743634044414",
      "x_studio_ship_ups_or_freight": false,
      "x_studio_warranty": "1 Year",
      "x_studio_length_available": false
    },
    {
      "id": 1527,
      "display_name": "P2P-PT12-SCU-SM-XM",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/p2p-pt12-scu-sm-xm-1527",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/p2p-pt12-scu-sm-xm-1527",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABgkAAASlCAYAAACStTnVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEvWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94c...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAMUCAYAAAAi/VWAAAEAAElEQVR42uz9aZOjSbKdCT6qZvYuWHyJLTNru/d2c2t2///fMjNk912rKjMjwt2xvZstO...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAGKCAYAAAB6u/nZAAEAAElEQVR42uz9Z7Bl2XmeCT5rbb/38e56kze9z6ysyvIFoOA9RJEyI7bEVis61B3TomJar...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAADFCAYAAAC7ICzVAADWK0lEQVR42uy9d4CcZ3nu/Xv79D7b+656L1az5d5twJjeAiEQUkg5OScVckL4Dl9OElJII...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAABjCAYAAABT7gjnAABCUUlEQVR42u29d7Al133f+Tmn880v5zfvTR5gBjkQIEESIEFSJEVSoihKsuRVWXG1kmV77...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "P2P-PT12-SCU-SM-XM",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": false,
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 29.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1492
      ],
      "product_variant_id": [
        1492,
        "P2P-PT12-SCU-SM-XM"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": true,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a034.49 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "12-Pack 1m SC/UPC Singlemode Multicolor Pigtail \u2013 Non-Jacketed, \nCeramic Ferrule, Fusion-Ready\n\n12-pack of 1-meter SC/UPC singlemode fiber optic pigtails in multicolor \nfor easy fiber identification. \n\nDesigned for telecom, data center, and FTTH applications, each pigtail features a 0.9mm non-jacketed buffer, high-performance ceramic (zirconia) ferrule, and UPC polished LC connector. Engineered for precision fusion splicing, these pigtails are fully compatible with the P2P Camo Fusion Splicer and meet ISO9001 and RoHS compliance standards. \n\nWith low insertion loss and high return loss, they ensure minimal signal degradation, even in mission-critical environments. Ideal for fusion splicing in builds from 1 to 12 strands, this 12-pack supports scalable installations with clear color coding and professional-grade performance.\n\nFeatures:\n\u2022 Sold as a 12-pack for use across\n\u2022 all strand counts\n\u2022 Pre-terminated SC/UPC connectors \u2013 ideal for fusion splicing\n\u2022 Fully compatible with P2P Camo Fusion Splicer\n\u2022 12 distinct colors for fast strand identification\n\u2022 Ceramic zirconia ferrule for reliable core alignment\n\u2022 Low insertion loss (\u2264 0.30 dB) for signal integrity\n\u2022 High return loss (\u2265 55 dB) for minimal reflection\n\u2022 Non-jacketed 0.9mm fiber with minimal footprint\n\u2022 Operating temperature range: -20\u00b0C to +70\u00b0C",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "19.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1WSinft5y38NmgfUHfN3fPxFblwp2lCmf",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "China",
      "x_studio_width_inches": false,
      "x_studio_weight_lbs": false,
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "15",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": false,
      "x_studio_height_inches": false,
      "x_studio_upc_code": "743634044391",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "1 Year",
      "x_studio_length_available": false
    },
    {
      "id": 1513,
      "display_name": "P2P-PT12FR-OS2-SCUPC-3M",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/p2p-pt12fr-os2-scupc-3m-1513",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/p2p-pt12fr-os2-scupc-3m-1513",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA...",
      "image_1024": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA...",
      "image_512": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_256": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_128": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "P2P-PT12FR-OS2-SCUPC-3M",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        29,
        "ROLLED E-RIBBON FIBER SC/UPC CONNECTORS"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 99.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1478
      ],
      "product_variant_id": [
        1478,
        "P2P-PT12FR-OS2-SCUPC-3M"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a0114.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "12 Fiber Singlemode SC/UPC ROLLED E-RIBBON 10 METER 200um OS2 Fiber Optic Splice Pigtails and up to 30 meters.\n\nThe P2P 12-Fiber SC/UPC Rolled E-Ribbon Pigtail with \nStainless Steel Armor is engineered for rapid, high-density terminations in data centers, FTTH networks, and enterprise installations where space efficiency and long-term reliability are critical. \n\nAvailable from 3 meters to 30 meters as well as custom lengths\n\nThis product features a compact, jacketed 250\u00b5m G657.A2 flat ribbon fiber enclosed in oval tubing with internal rolled (E-ribbon) construction, providing a pre-aligned, splicing-ready configuration that dramatically reduces fusion splicing time. \n\n\nInstallers benefit from factory-controlled ribbon geometry and pre-routed 900\u00b5m color-coded breakout legs that eliminate the need for manual fan-out kits or fusion alignment adjustments. By using LC/UPC connectors with high precision alignment and color-coded booting, each breakout is clearly marked for seamless routing into patch panels or enclosures. \n\nThe design improves fiber management, enhances airflow in tight spaces, and significantly cuts installation time\u2014while also maintaining robust optical performance and superior bend resistance thanks to G657.A2 glass. Customers gain a scalable, clean, and reliable interface ideal for modern optical networking infrastructure, while minimizing labor costs and ensuring consistent results in high-volume rollouts.\n\nFeatures:\n\u2022 Fiber Count:12 Fibers\n\u2022 (Flat Ribbon Configuration)\n\u2022 Connector Type: SC/UPC Simplex x12 (Blue Housing, White Boot)\n\u2022 Available: 3 meters to 30 meters and custom lenghts upon request\n\u2022 Compliance:RoHS, REACH, TSCA, TIA/EIA-568\n\u2022 Country of Origin:Made in Taiwan\n\u2022 Application:FTTx, ODN, Data Centers, Cross-Connect, Mass Splicing Panels\n\u2022 LSZH\n\u2022 5.0 x 2.2mm outer diameter\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "84.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1kBduAkSj77_b5U5Q0wD28btdP3xvHIYy",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "11\"",
      "x_studio_weight_lbs": "0.0006lbs/ft",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "60",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "13\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634042519",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1512,
      "display_name": "P2P-PT12RR200-OS2-LCUPC-3M",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/p2p-pt12rr200-os2-lcupc-3m-1512",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/p2p-pt12rr200-os2-lcupc-3m-1512",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA...",
      "image_1024": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA...",
      "image_512": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_256": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_128": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "P2P-PT12RR200-OS2-LCUPC-3M",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        28,
        "ROLLED E-RIBBON FIBER LC/UPC CONNECTORS"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 99.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1477
      ],
      "product_variant_id": [
        1477,
        "P2P-PT12RR200-OS2-LCUPC-3M"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a0114.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "12 Fiber Singlemode LC/UPC ROLLED E-RIBBON 3 METER 200um OS2 Fiber Optic Splice Pigtails non armor up to 30 meters.\n\nThe P2P 12-Fiber LC/UPC Rolled E-Ribbon Pigtail with \nStainless Steel Armor is engineered for rapid, high-density terminations in data centers, FTTH networks, and enterprise installations where space efficiency and long-term reliability are critical. \n\nAvailable from 3 meters to 30 meters as well as custom lengths\n\nThis product features a compact, jacketed 250\u00b5m G657.A2 flat ribbon fiber enclosed in oval tubing with internal rolled (E-ribbon) construction, providing a pre-aligned, splicing-ready configuration that dramatically reduces fusion splicing time. \n\nInstallers benefit from factory-controlled ribbon geometry and pre-routed 900\u00b5m color-coded breakout legs that eliminate the need for manual fan-out kits or fusion alignment adjustments. By using LC/UPC connectors with high precision alignment and color-coded booting, each breakout is clearly marked for seamless routing into patch panels or enclosures. \n\nThe design improves fiber management, enhances airflow in tight spaces, and significantly cuts installation time\u2014while also maintaining robust optical performance and superior bend resistance thanks to G657.A2 glass. Customers gain a scalable, clean, and reliable interface ideal for modern optical networking infrastructure, while minimizing labor costs and ensuring consistent results in high-volume rollouts.\n\nFeatures:\n\u2022 Fiber Count:12 Fibers\n\u2022 (Flat Ribbon Configuration)\n\u2022 Connector Type: LC/UPC Simplex x12 (Blue Housing, White Boot)\n\u2022 Available: 3 meters to 30 meters and custom lenghts upon request\n\u2022 Compliance:RoHS, REACH, TSCA, TIA/EIA-568\n\u2022 Country of Origin:Made in Taiwan\n\u2022 Application:FTTx, ODN, Data Centers, Cross-Connect, Mass Splicing Panels\n\u2022 LSZH\n\u2022 5.0 x 2.2mm outer diameter\n\u2022 Smallest outer diameter  patch cable\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "86.5",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1akl49p9Cl73uTNPMoZb8n8GpMnqdL4E9",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "11\"",
      "x_studio_weight_lbs": "0.0006lbs/ft",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "60.5",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "13\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634042458",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1467,
      "display_name": "SM12T-A2-IOPY-1000",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/sm12t-a2-iopy-1000-1467",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/sm12t-a2-iopy-1000-1467",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "/9j/4AAQSkZJRgABAQEAwADAAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_1024": "/9j/4AAQSkZJRgABAQEAwADAAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_512": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_256": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_128": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "SM12T-A2-IOPY-1000",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        13,
        "Fiber Optic Bulk Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 3499,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1432
      ],
      "product_variant_id": [
        1432,
        "SM12T-A2-IOPY-1000"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a04,023.85 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "12 Strand 1000FT Stainless Steel Armored Singlemode Tight \nBuffer 900u Bend Insensitive Indoor/Outdoor Plenum Yellow UV Bulk\n\nUpgrade your fiber network with this 1000FT 12 Strand Singlemode Fiber Optic Cable, built for maximum performance and protection in the harshest environments. Featuring G657A2 bend-insensitive fiber, passivated metallic cladding stainless steel armor, and a bright yellow UV-resistant plenum-rated jacket, this cable is engineered for versatility and durability\u2014indoors or out.\n\nThe Passivated Metallic Cladding delivers superior crush resistance, rodent protection, and corrosion defense\u2014ideal for industrial zones, data centers, campuses, and outdoor installations in harsh or unpredictable conditions.\n\nEach fiber is individually buffered for easy termination, flexible routing, and direct connectorization without fan-out kits. Perfect for patching, splicing, and rapid deployment.\n\nEach of the six singlemode fibers is tight buffered, enabling easy termination without fan-out kits and faster field deployment, especially in emergency or constrained-access environments.\n\nFeatures:\n\u2022 1000 Foot Reel\n\u2022 Singlemode\n\u2022 12 Strand\n\u2022 Stainless Steel Armor\n\u2022 Tight Buffer\n\u2022 Bend Insensitive G657A2\n\u2022 Indoor/Outdoor Plenum Rated\n\u2022 UV-Resistant\n\u2022 6.0mm outer diameter\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "2459",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1pQv0q6lfTpxOT4B",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "71lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "1840",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044025",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1465,
      "display_name": "SM12T-A2-IOPY-250",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/sm12t-a2-iopy-250-1465",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/sm12t-a2-iopy-250-1465",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAYAAAB/HSuDAAAAAXNSR0IArs4c6QAAIABJREFUeF7svWmTJNl1HXh8j4jcauuuXgA0QHaDIAhCBDESRWEkk...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAYAAAB/HSuDAAAAAXNSR0IArs4c6QAAIABJREFUeF7svWmTJNl1HXh8j4jcauuuXgA0QHaDIAhCBDESRWEkk...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAEAAElEQVR42uz9eaxsWZbeh/3W3vucExF3emNOlTV1V/XcbA49UM0mKYpN0UKDFFumbPkPg...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAEAAElEQVR42uz9eZilW17XiX5+a6333VPMGRk5nqFOzTM1UQhYyoyFIKLYtAP2bREfkW6ev...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAABQ3ElEQVR42u29ebxk11Xf+93DOaemO3ffngcNraE1WYNlCwvLAwZjsAkzZALzEpznQPxCC...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "SM12T-A2-IOPY-250",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        13,
        "Fiber Optic Bulk Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 899.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1430
      ],
      "product_variant_id": [
        1430,
        "SM12T-A2-IOPY-250"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a01,034.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "12 Strand 250FT Stainless Steel Armored Singlemode Tight \nBuffer 900u Bend Insensitive Indoor/Outdoor Plenum Yellow UV Bulk\n\nUpgrade your fiber network with this 250FT 12 Strand Singlemode Fiber Optic Cable, built for maximum performance and protection in the harshest environments. Featuring G657A2 bend-insensitive fiber, passivated metallic cladding stainless steel armor, and a bright yellow UV-resistant plenum-rated jacket, this cable is engineered for versatility and durability\u2014indoors or out.\n\nThe Passivated Metallic Cladding delivers superior crush resistance, rodent protection, and corrosion defense\u2014ideal for industrial zones, data centers, campuses, and outdoor installations in harsh or unpredictable conditions.\n\nEach fiber is individually buffered for easy termination, flexible routing, and direct connectorization without fan-out kits. Perfect for patching, splicing, and rapid deployment.\n\nEach of the six singlemode fibers is tight buffered, enabling easy termination without fan-out kits and faster field deployment, especially in emergency or constrained-access environments.\n\nFeatures:\n\u2022 250 Foot Reel\n\u2022 Singlemode\n\u2022 12 Strand\n\u2022 Stainless Steel Armor\n\u2022 Tight Buffer\n\u2022 Bend Insensitive G657A2\n\u2022 Indoor/Outdoor Plenum Rated\n\u2022 UV-Resistant\n\u2022 6.0mm outer diameter\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "612.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1pQv0q6lfTpxOT4B",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "21lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "460",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044001",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1466,
      "display_name": "SM12T-A2-IOPY-500",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/sm12t-a2-iopy-500-1466",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/sm12t-a2-iopy-500-1466",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "/9j/4AAQSkZJRgABAQEAwADAAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_1024": "/9j/4AAQSkZJRgABAQEAwADAAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_512": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_256": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_128": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "SM12T-A2-IOPY-500",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        13,
        "Fiber Optic Bulk Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 1799.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1431
      ],
      "product_variant_id": [
        1431,
        "SM12T-A2-IOPY-500"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a02,069.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "12 Strand 500FT Stainless Steel Armored Singlemode Tight \nBuffer 900u Bend Insensitive Indoor/Outdoor Plenum Yellow UV Bulk\n\nUpgrade your fiber network with this 500FT 12 Strand Singlemode Fiber Optic Cable, built for maximum performance and protection in the harshest environments. Featuring G657A2 bend-insensitive fiber, passivated metallic cladding stainless steel armor, and a bright yellow UV-resistant plenum-rated jacket, this cable is engineered for versatility and durability\u2014indoors or out.\n\nThe Passivated Metallic Cladding delivers superior crush resistance, rodent protection, and corrosion defense\u2014ideal for industrial zones, data centers, campuses, and outdoor installations in harsh or unpredictable conditions.\n\nEach fiber is individually buffered for easy termination, flexible routing, and direct connectorization without fan-out kits. Perfect for patching, splicing, and rapid deployment.\n\nEach of the six singlemode fibers is tight buffered, enabling easy termination without fan-out kits and faster field deployment, especially in emergency or constrained-access environments.\n\nFeatures:\n\u2022 500 Foot Reel\n\u2022 Singlemode\n\u2022 12 Strand\n\u2022 Stainless Steel Armor\n\u2022 Tight Buffer\n\u2022 Bend Insensitive G657A2\n\u2022 Indoor/Outdoor Plenum Rated\n\u2022 UV-Resistant\n\u2022 6.0mm outer diameter\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "1225.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1pQv0q6lfTpxOT4B",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "37lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "920",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044018",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1473,
      "display_name": "SM24T-A2-PL-1000",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/sm24t-a2-pl-1000-1473",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/sm24t-a2-pl-1000-1473",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "/9j/4AAQSkZJRgABAQEAwADAAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_1024": "/9j/4AAQSkZJRgABAQEAwADAAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_512": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_256": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_128": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "SM24T-A2-PL-1000",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        13,
        "Fiber Optic Bulk Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 4999.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1438
      ],
      "product_variant_id": [
        1438,
        "SM24T-A2-PL-1000"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a05,749.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "24 Strand 1000FT Smallest 3.0mm OD Stainless Steel Armored \nSinglemode Tight Buffer 900u Bend Insensitive I/O Plenum Yellow\n\nWhen performance, protection, and space efficiency matter most, \nthis 24-Strand G657.A2 Singlemode Fiber Optic Cable delivers unmatched value in mission-critical installations. Engineered with a compact 3.0mm outer diameter and fortified with passivated SUS202 stainless steel spiral armor, this cable is purpose-built for the harshest indoor and outdoor environments\u2014all while being fully plenum-rated for fire safety.\n\nFrom crowded cable trays to high-traffic industrial conduits, this cable\u2019s slim 3.0mm form factor gives you the routing flexibility you need\u2014without compromising on protection. The tight-buffered design enables direct connectorization, eliminating the need for breakout kits and reducing termination time.\n\nIts SUS202 passivated stainless steel spiral armor provides robust mechanical protection against crushing forces, rodents, and sharp bends, making it ideal for challenging environments like utility tunnels, ceiling plenums, or military shelters.\n\nThis cable goes beyond basic connectivity\u2014it's a smart investment in long-term reliability, installation efficiency, and total operational readiness.\n\nFeatures:\n\u2022 1000 Foot Reel\n\u2022 Singlemode\n\u2022 24 Strand\n\u2022 Small OD 3.0mm\n\u2022 SUS202 Stainless Steel Armor\n\u2022 Tight Buffer\n\u2022 Bend Insensitive G657A2\n\u2022 Plenum Rated\n\u2022 3.0mm outer diameter\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "3459",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1D1FGtS32uAMn7FvQO5uQAeGrG3DVAgk4",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "24\"",
      "x_studio_weight_lbs": "102lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "2590",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "24\"",
      "x_studio_height_inches": "18\"",
      "x_studio_upc_code": "743634044087",
      "x_studio_ship_ups_or_freight": "UPS/Truck",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1471,
      "display_name": "SM24T-A2-PL-250",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/sm24t-a2-pl-250-1471",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/sm24t-a2-pl-250-1471",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAYAAAB/HSuDAAAAAXNSR0IArs4c6QAAIABJREFUeF7svWmTJNl1HXh8j4jcauuuXgA0QHaDIAhCBDESRWEkk...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAYAAAB/HSuDAAAAAXNSR0IArs4c6QAAIABJREFUeF7svWmTJNl1HXh8j4jcauuuXgA0QHaDIAhCBDESRWEkk...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAEAAElEQVR42uz9eaxsWZbeh/3W3vucExF3emNOlTV1V/XcbA49UM0mKYpN0UKDFFumbPkPg...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAEAAElEQVR42uz9eZilW17XiX5+a6333VPMGRk5nqFOzTM1UQhYyoyFIKLYtAP2bREfkW6ev...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAABQ3ElEQVR42u29ebxk11Xf+93DOaemO3ffngcNraE1WYNlCwvLAwZjsAkzZALzEpznQPxCC...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "SM24T-A2-PL-250",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        13,
        "Fiber Optic Bulk Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 1299.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1436
      ],
      "product_variant_id": [
        1436,
        "SM24T-A2-PL-250"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a01,494.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "24 Strand 250FT Smallest 3.0mm OD Stainless Steel Armored \nSinglemode Tight Buffer 900u Bend Insensitive I/O Plenum Yellow\n\nWhen performance, protection, and space efficiency matter most, \nthis 24-Strand G657.A2 Singlemode Fiber Optic Cable delivers unmatched value in mission-critical installations. Engineered with a compact 3.0mm outer diameter and fortified with passivated SUS202 stainless steel spiral armor, this cable is purpose-built for the harshest indoor and outdoor environments\u2014all while being fully plenum-rated for fire safety.\n\nFrom crowded cable trays to high-traffic industrial conduits, this cable\u2019s slim 3.0mm form factor gives you the routing flexibility you need\u2014without compromising on protection. The tight-buffered design enables direct connectorization, eliminating the need for breakout kits and reducing termination time.\n\nIts SUS202 passivated stainless steel spiral armor provides robust mechanical protection against crushing forces, rodents, and sharp bends, making it ideal for challenging environments like utility tunnels, ceiling plenums, or military shelters.\n\nThis cable goes beyond basic connectivity\u2014it's a smart investment in long-term reliability, installation efficiency, and total operational readiness.\n\nFeatures:\n\u2022 250 Foot Reel\n\u2022 Singlemode\n\u2022 24 Strand\n\u2022 Small OD 3.0mm\n\u2022 SUS202 Stainless Steel Armor\n\u2022 Tight Buffer\n\u2022 Bend Insensitive G657A2\n\u2022 Plenum Rated\n\u2022 3.0mm outer diameter\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "859.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1D1FGtS32uAMn7FvQO5uQAeGrG3DVAgk4",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "30lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "647.5",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044063",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1472,
      "display_name": "SM24T-A2-PL-500",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/sm24t-a2-pl-500-1472",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/sm24t-a2-pl-500-1472",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "/9j/4AAQSkZJRgABAQEAwADAAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_1024": "/9j/4AAQSkZJRgABAQEAwADAAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_512": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_256": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_128": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "SM24T-A2-PL-500",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        13,
        "Fiber Optic Bulk Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 2499.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1437
      ],
      "product_variant_id": [
        1437,
        "SM24T-A2-PL-500"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a02,874.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "24 Strand 500FT Smallest 3.0mm OD Stainless Steel Armored \nSinglemode Tight Buffer 900u Bend Insensitive I/O Plenum Yellow\n\nWhen performance, protection, and space efficiency matter most, \nthis 24-Strand G657.A2 Singlemode Fiber Optic Cable delivers unmatched value in mission-critical installations. Engineered with a compact 3.0mm outer diameter and fortified with passivated SUS202 stainless steel spiral armor, this cable is purpose-built for the harshest indoor and outdoor environments\u2014all while being fully plenum-rated for fire safety.\n\nFrom crowded cable trays to high-traffic industrial conduits, this cable\u2019s slim 3.0mm form factor gives you the routing flexibility you need\u2014without compromising on protection. The tight-buffered design enables direct connectorization, eliminating the need for breakout kits and reducing termination time.\n\nIts SUS202 passivated stainless steel spiral armor provides robust mechanical protection against crushing forces, rodents, and sharp bends, making it ideal for challenging environments like utility tunnels, ceiling plenums, or military shelters.\n\nThis cable goes beyond basic connectivity\u2014it's a smart investment in long-term reliability, installation efficiency, and total operational readiness.\n\nFeatures:\n\u2022 500 Foot Reel\n\u2022 Singlemode\n\u2022 24 Strand\n\u2022 Small OD 3.0mm\n\u2022 SUS202 Stainless Steel Armor\n\u2022 Tight Buffer\n\u2022 Bend Insensitive G657A2\n\u2022 Plenum Rated\n\u2022 3.0mm outer diameter\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "1725.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1D1FGtS32uAMn7FvQO5uQAeGrG3DVAgk4",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "54lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "1295",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044070",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1470,
      "display_name": "SM4T-A1-TAC-C5.5-1000",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/sm4t-a1-tac-c55-1000-1470",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/sm4t-a1-tac-c55-1000-1470",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "/9j/4AAQSkZJRgABAQEAwADAAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_1024": "/9j/4AAQSkZJRgABAQEAwADAAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_512": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_256": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_128": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "SM4T-A1-TAC-C5.5-1000",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        13,
        "Fiber Optic Bulk Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 1999.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1435
      ],
      "product_variant_id": [
        1435,
        "SM4T-A1-TAC-C5.5-1000"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a02,299.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "4  Core 1000FT Stainless Steel Armored and BRAID \nreinforcement Singlemode Tight Buffer 900u Bend Insensitive PU Jacket 5.5mm\n\nIntroducing the Point 2 Point 4-Core OS2 G657A1 \nSinglemode Fiber Cable, designed with passivated stainless steel spiral armor and braided reinforcement to meet the highest standards of durability and performance in fiber optic installations. Featuring a tight-buffered 900\u00b5m construction, this cable enables direct connectorization without breakout kits, significantly reducing labor time and simplifying terminations in the field. With only 5.5mm outer diameter, it offers powerful protection and flexibility in a slim, easy-to-route design\u2014ideal for space-constrained pathways, broadcast, industrial controls, military-grade environments, and robotic automation.\n\nWhat sets this cable apart is its passivated metallic cladding and braided stainless steel layer, which together offer exceptional crush resistance, rodent protection, and mechanical durability in dynamic and high-impact conditions. The robust 29x 1500D aramid yarn strength members provide high tensile capacity for long pulls and challenging conduit runs, while the black polyurethane jacket adds an extra layer of toughness against abrasion, oils, chemicals, and outdoor exposure.\n\nEngineered to operate in extreme temperatures from -20\u00b0C to +60\u00b0C, and bend safely down to 10x OD (long-term) and 20x OD (short-term), this cable offers both resilience and flexibility where it matters most. Whether you're deploying in manufacturing lines, smart infrastructure, outdoor security systems, or harsh field conditions, this cable provides a reliable, code-compliant, and field-proven solution.\n\nFeatures:\n\u2022 1000 Foot Reel\n\u2022 Singlemode\n\u2022 4 Strand\n\u2022 Stainless Steel Armor\n\u2022 Tight Buffer 900\u00b5m\n\u2022 Bend Insensitive G657A2\n\u2022 black polyurethane jacket\n\u2022 5.5mm outer diameter\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "1459.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1v1LQiffoOSfqVfQA7KMfp3tsVvWelQ67",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "35lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "1090",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044056",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1468,
      "display_name": "SM4T-A1-TAC-C5.5-250",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/sm4t-a1-tac-c55-250-1468",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/sm4t-a1-tac-c55-250-1468",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "/9j/4AAQSkZJRgABAQEAwADAAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_1024": "/9j/4AAQSkZJRgABAQEAwADAAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_512": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_256": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_128": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "SM4T-A1-TAC-C5.5-250",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        13,
        "Fiber Optic Bulk Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 499.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1433
      ],
      "product_variant_id": [
        1433,
        "SM4T-A1-TAC-C5.5-250"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a0574.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "4  Core 250FT Stainless Steel Armored and BRAID \nreinforcement Singlemode Tight Buffer 900u Bend Insensitive PU Jacket 5.5mm\n\nIntroducing the Point 2 Point 250FT 4-Core OS2 G657A1 \nSinglemode Fiber Cable, designed with passivated stainless steel spiral armor and braided reinforcement to meet the highest standards of durability and performance in fiber optic installations. \n\nFeaturing a tight-buffered 900\u00b5m construction, this cable enables direct connectorization without breakout kits, significantly reducing labor time and simplifying terminations in the field. With only 5.5mm outer diameter, it offers powerful protection and flexibility in a slim, easy-to-route design\u2014ideal for space-constrained pathways, broadcast, industrial controls, military-grade environments, and robotic automation.\n\nWhat sets this cable apart is its passivated metallic cladding and braided stainless steel layer, which together offer exceptional crush resistance, rodent protection, and mechanical durability in dynamic and high-impact conditions. \n\nThe robust 29x 1500D aramid yarn strength members provide high tensile capacity for long pulls and challenging conduit runs, while the black polyurethane jacket adds an extra layer of toughness against abrasion, oils, chemicals, and outdoor exposure.\n\nEngineered to operate in extreme temperatures from -20\u00b0C to +60\u00b0C, and bend safely down to 10x OD (long-term) and 20x OD (short-term), this cable offers both resilience and flexibility where it matters most. Whether you're deploying in manufacturing lines, smart infrastructure, outdoor security systems, or harsh field conditions, this cable provides a reliable, code-compliant, and field-proven solution.\n\nFeatures:\n\u2022 250 Foot Reel\n\u2022 Singlemode\n\u2022 4 Strand\n\u2022 Stainless Steel Armor\n\u2022 Tight Buffer 900\u00b5m\n\u2022 Bend Insensitive G657A2\n\u2022 black polyurethane jacket\n\u2022 5.5mm outer diameter\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "359.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1v1LQiffoOSfqVfQA7KMfp3tsVvWelQ67",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "12lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "272.5",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044032",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1469,
      "display_name": "SM4T-A1-TAC-C5.5-500",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/sm4t-a1-tac-c55-500-1469",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/sm4t-a1-tac-c55-500-1469",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAYAAAB/HSuDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAP+lS...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAYAAAB/HSuDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAP+lS...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAEAAElEQVR42uz9V7ClWZbfh/22+cwx19/0meXb91hiMBwMBIwCgAQTMGJIpEQSUuhZ0oNCD...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAEAAElEQVR42uz915NtW5rdh/3m8mt7n/6Ye64p012O3dUG7QEIIEAKIEAhIJBgAJQgISTqg...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAABhXklEQVR42u39d3Sl2Xneif72/tKJOMgZBVShQueqTmw22UxqSjKDRCqQlERRtq9kyzPX9...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "SM4T-A1-TAC-C5.5-500",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        13,
        "Fiber Optic Bulk Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 1099.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1434
      ],
      "product_variant_id": [
        1434,
        "SM4T-A1-TAC-C5.5-500"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a01,264.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "4  Core 500FT Stainless Steel Armored and BRAID \nreinforcement Singlemode Tight Buffer 900u Bend Insensitive PU Jacket 5.5mm\n\nIntroducing the Point 2 Point 500FT 4-Core OS2 G657A1 \nSinglemode Fiber Cable, designed with passivated stainless steel spiral armor and braided reinforcement to meet the highest standards of durability and performance in fiber optic installations. Featuring a tight-buffered 900\u00b5m construction, this cable enables direct connectorization without breakout kits, significantly reducing labor time and simplifying terminations in the field. With only 5.5mm outer diameter, it offers powerful protection and flexibility in a slim, easy-to-route design\u2014ideal for space-constrained pathways, broadcast, industrial controls, military-grade environments, and robotic automation.\n\nWhat sets this cable apart is its passivated metallic cladding and braided stainless steel layer, which together offer exceptional crush resistance, rodent protection, and mechanical durability in dynamic and high-impact conditions. The robust 29x 1500D aramid yarn strength members provide high tensile capacity for long pulls and challenging conduit runs, while the black polyurethane jacket adds an extra layer of toughness against abrasion, oils, chemicals, and outdoor exposure.\n\nEngineered to operate in extreme temperatures from -20\u00b0C to +60\u00b0C, and bend safely down to 10x OD (long-term) and 20x OD (short-term), this cable offers both resilience and flexibility where it matters most. Whether you're deploying in manufacturing lines, smart infrastructure, outdoor security systems, or harsh field conditions, this cable provides a reliable, code-compliant, and field-proven solution.\n\nFeatures:\n\u2022 500 Foot Reel\n\u2022 Singlemode\n\u2022 4 Strand\n\u2022 Stainless Steel Armor\n\u2022 Tight Buffer 900\u00b5m\n\u2022 Bend Insensitive G657A2\n\u2022 black polyurethane jacket\n\u2022 5.5mm outer diameter\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "725.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1v1LQiffoOSfqVfQA7KMfp3tsVvWelQ67",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "20lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "545",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634044049",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 Years",
      "x_studio_length_available": false
    },
    {
      "id": 1464,
      "display_name": "SM6T-A2-IOPY-1000",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/sm6t-a2-iopy-1000-1464",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/sm6t-a2-iopy-1000-1464",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "/9j/4AAQSkZJRgABAQEAwADAAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_1024": "/9j/4AAQSkZJRgABAQEAwADAAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_512": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_256": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_128": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "SM6T-A2-IOPY-1000",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        13,
        "Fiber Optic Bulk Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 1799.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1429
      ],
      "product_variant_id": [
        1429,
        "SM6T-A2-IOPY-1000"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a02,069.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "6 Strand 1000FT Stainless Steel Armored Singlemode Tight \nBuffer 900u Bend Insensitive Indoor/Outdoor Plenum Yellow UV Bulk\n\nUpgrade your fiber network with this 1000FT 6 Strand Singlemode Fiber Optic Cable, built for maximum performance and protection in the harshest environments. Featuring G657A2 bend-insensitive fiber, passivated metallic cladding stainless steel armor, and a bright yellow UV-resistant plenum-rated jacket, this cable is engineered for versatility and durability\u2014indoors or out.\n\nThe Passivated Metallic Cladding delivers superior crush resistance, rodent protection, and corrosion defense\u2014ideal for industrial zones, data centers, campuses, and outdoor installations in harsh or unpredictable conditions.\n\nEach fiber is individually buffered for easy termination, flexible routing, and direct connectorization without fan-out kits. Perfect for patching, splicing, and rapid deployment.\nEach of the six singlemode fibers is tight buffered, enabling easy termination without fan-out kits and faster field deployment, especially in emergency or constrained-access environments.\n\nP2P designs and manufactures custom passivated metallic cladding armor from 3 Hour burn, Power and Fiber in  a single jacket, SM & MM in single jacket to the smallest outer diameter and most rugged cables for any harsh and mission critical enviornments.\n\nFeatures:\n\u2022 1000 Foot Reel\n\u2022 Singlemode\n\u2022 6 Strand\n\u2022 Stainless Steel Armor\n\u2022 Tight Buffer\n\u2022 Bend Insensitive G657A2\n\u2022 Indoor/Outdoor Plenum Rated\n\u2022 UV-Resistant\n\u2022 6.0mm Outer Diameter\n\u2022 Smallest outer diameter armored cable\n\u2022 65% Lighter than Aluminum Armor\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "1305.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1CZ61sN7Z9tbz1yNbFYR5Rrrp5cd_vCrf",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "45lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "980",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634043998",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 years",
      "x_studio_length_available": false
    },
    {
      "id": 1462,
      "display_name": "SM6T-A2-IOPY-250",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/sm6t-a2-iopy-250-1462",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/sm6t-a2-iopy-250-1462",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAYAAAB/HSuDAAAAAXNSR0IArs4c6QAAIABJREFUeF7svWmTJNl1HXh8j4jcauuuXgA0QHaDIAhCBDESRWEkk...",
      "image_1024": "iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAYAAAB/HSuDAAAAAXNSR0IArs4c6QAAIABJREFUeF7svWmTJNl1HXh8j4jcauuuXgA0QHaDIAhCBDESRWEkk...",
      "image_512": "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAEAAElEQVR42uz9eaxsWZbeh/3W3vucExF3emNOlTV1V/XcbA49UM0mKYpN0UKDFFumbPkPg...",
      "image_256": "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAEAAElEQVR42uz9eZilW17XiX5+a6333VPMGRk5nqFOzTM1UQhYyoyFIKLYtAP2bREfkW6ev...",
      "image_128": "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAABQ3ElEQVR42u29ebxk11Xf+93DOaemO3ffngcNraE1WYNlCwvLAwZjsAkzZALzEpznQPxCC...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "SM6T-A2-IOPY-250",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        13,
        "Fiber Optic Bulk Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 449.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1427
      ],
      "product_variant_id": [
        1427,
        "SM6T-A2-IOPY-250"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a0517.49 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "6 Strand 250FT Stainless Steel Armored Singlemode Tight \nBuffer 900u Bend Insensitive Indoor/Outdoor Plenum Yellow UV Bulk\n\nUpgrade your fiber network with the P2P 250FT 6 Strand Singlemode Fiber Optic Cable, built for maximum protection, bend performance, and durability in harsh environments. \n\nThis cable features G657A2 bend-insensitive fiber, passivated metallic cladding stainless steel armor, and a bright yellow UV-resistant plenum-rated jacket for versatile indoor/outdoor use. The cable's ultra-compact 6.0\u00b10.2mm diameter is the smallest armored profile available, increasing pathway capacity by up to 500% while reducing congestion and weight by 65% compared to aluminum armor.\n\nEach fiber is tight buffered to 900\u00b5m, allowing easy termination without fan-out kits and enabling fast, direct connectorization in patching, splicing, or emergency repairs. The passivated stainless armor offers superior rodent resistance, crush strength, and corrosion defense, making it ideal for mission-critical installations in data centers, towers, industrial plants, and utility networks. Water-blocking yarn and UV protection ensure long-term reliability in buried, aerial, or exposed outdoor environments.\n\nP2P\u2019s armored cable is engineered for performance, safety, and code compliance, rated OFCP plenum, indoor/outdoor, and riser applications. It meets TIA/EIA-568, ANSI, ICEA, and RoHS standards, operates from -20\u00b0C to +60\u00b0C, and is backed by a 25-year warranty\u2014making it the installer\u2019s top choice for compact, rugged, and future-proof fiber builds.\n\nFeatures:\n\u2022 250 Foot Reel\n\u2022 Singlemode\n\u2022 6 Strand\n\u2022 Stainless Steel Armor\n\u2022 Tight Buffer\n\u2022 Bend Insensitive G657A2\n\u2022 Indoor/Outdoor Plenum Rated\n\u2022 UV-Resistant\n\u2022 6.0mm outer diameter\n\u2022 Smallest outer diameter armored cable\n\u2022 65% Lighter than Aluminum Armor\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "325.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1CZ61sN7Z9tbz1yNbFYR5Rrrp5cd_vCrf",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "14lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "245",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634043974",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 years",
      "x_studio_length_available": false
    },
    {
      "id": 1463,
      "display_name": "SM6T-A2-IOPY-500",
      "website_id": false,
      "website_published": true,
      "is_published": true,
      "can_publish": true,
      "website_url": "/shop/sm6t-a2-iopy-500-1463",
      "website_absolute_url": "https://point-2-point-communications-v2.odoo.com/shop/sm6t-a2-iopy-500-1463",
      "is_seo_optimized": false,
      "website_meta_title": false,
      "website_meta_description": false,
      "website_meta_keywords": false,
      "website_meta_og_img": false,
      "seo_name": false,
      "image_1920": "/9j/4AAQSkZJRgABAQEAwADAAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_1024": "/9j/4AAQSkZJRgABAQEAwADAAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUF...",
      "image_512": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_256": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "image_128": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKC...",
      "activity_ids": [],
      "activity_state": false,
      "activity_user_id": false,
      "activity_type_id": false,
      "activity_type_icon": false,
      "activity_date_deadline": false,
      "my_activity_date_deadline": false,
      "activity_summary": false,
      "activity_exception_decoration": false,
      "activity_exception_icon": false,
      "activity_calendar_event_id": false,
      "message_is_follower": false,
      "message_follower_ids": [],
      "message_partner_ids": [],
      "message_ids": [],
      "has_message": false,
      "message_needaction": false,
      "message_needaction_counter": 0,
      "message_has_error": false,
      "message_has_error_counter": 0,
      "message_attachment_count": 0,
      "rating_ids": [],
      "website_message_ids": [],
      "message_has_sms_error": false,
      "name": "SM6T-A2-IOPY-500",
      "sequence": 1,
      "description": false,
      "description_purchase": false,
      "description_sale": false,
      "type": "consu",
      "combo_ids": [],
      "service_tracking": "no",
      "categ_id": [
        13,
        "Fiber Optic Bulk Stainless Steel Armored"
      ],
      "currency_id": [
        1,
        "USD"
      ],
      "cost_currency_id": [
        1,
        "USD"
      ],
      "list_price": 899.99,
      "standard_price": 0,
      "volume": 0,
      "volume_uom_name": "m\u00b3",
      "weight": 0,
      "weight_uom_name": "kg",
      "sale_ok": true,
      "purchase_ok": true,
      "uom_id": [
        1,
        "Units"
      ],
      "uom_ids": [],
      "uom_name": "Units",
      "company_id": false,
      "seller_ids": [],
      "variant_seller_ids": [],
      "active": true,
      "color": 0,
      "is_product_variant": false,
      "attribute_line_ids": [],
      "valid_product_template_attribute_line_ids": [],
      "product_variant_ids": [
        1428
      ],
      "product_variant_id": [
        1428,
        "SM6T-A2-IOPY-500"
      ],
      "product_variant_count": 1,
      "barcode": false,
      "default_code": false,
      "pricelist_rule_ids": [],
      "product_document_ids": [],
      "product_document_count": 0,
      "can_image_1024_be_zoomed": false,
      "has_configurable_attributes": false,
      "is_dynamically_created": false,
      "product_tooltip": "",
      "is_favorite": false,
      "product_tag_ids": [],
      "product_properties": [],
      "create_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "create_date": "2026-01-05 10:29:04",
      "write_uid": [
        2,
        "Rishabh Choudhary"
      ],
      "write_date": "2026-01-05 10:33:34",
      "taxes_id": [
        269
      ],
      "tax_string": "(= $\u00a01,034.99 Incl. Taxes)",
      "supplier_taxes_id": [
        270
      ],
      "property_account_income_id": false,
      "property_account_expense_id": false,
      "account_tag_ids": [],
      "fiscal_country_codes": "US",
      "is_storable": true,
      "responsible_id": [
        2,
        "Rishabh Choudhary"
      ],
      "property_stock_production": [
        15,
        "Virtual Locations/Production"
      ],
      "property_stock_inventory": [
        14,
        "Virtual Locations/Inventory adjustment"
      ],
      "sale_delay": 0,
      "tracking": "none",
      "lot_sequence_id": [
        17,
        "Serial Numbers"
      ],
      "serial_prefix_format": "",
      "next_serial": "0000001",
      "description_picking": false,
      "description_pickingout": false,
      "description_pickingin": false,
      "qty_available": 0,
      "virtual_available": 0,
      "incoming_qty": 0,
      "outgoing_qty": 0,
      "location_id": false,
      "warehouse_id": false,
      "has_available_route_ids": false,
      "route_ids": [],
      "nbr_moves_in": 0,
      "nbr_moves_out": 0,
      "nbr_reordering_rules": 0,
      "reordering_min_qty": 0,
      "reordering_max_qty": 0,
      "route_from_categ_ids": [],
      "show_on_hand_qty_status_button": true,
      "show_forecasted_qty_status_button": true,
      "show_qty_update_button": true,
      "cost_method": "standard",
      "valuation": "manual_periodic",
      "lot_valuated": false,
      "l10n_in_hsn_code": false,
      "l10n_in_hsn_warning": false,
      "l10n_in_is_gst_registered_enabled": false,
      "service_type": "manual",
      "sale_line_warn_msg": false,
      "expense_policy": "no",
      "visible_expense_policy": false,
      "sales_count": 0,
      "invoice_policy": "order",
      "optional_product_ids": [],
      "hs_code": false,
      "country_of_origin": false,
      "rating_last_value": 0,
      "rating_last_feedback": false,
      "rating_last_image": false,
      "rating_count": 0,
      "rating_avg": 0,
      "rating_avg_text": "none",
      "rating_percentage_satisfaction": -1,
      "rating_last_text": false,
      "website_description": false,
      "description_ecommerce": "6 Strand 500FT Stainless Steel Armored Singlemode Tight \nBuffer 900u Bend Insensitive Indoor/Outdoor Plenum Yellow UV Bulk\n\nUpgrade your fiber network with this 500FT 6 Strand Singlemode Fiber Optic Cable, built for maximum performance and protection in the harshest environments. Featuring G657A2 bend-insensitive fiber, passivated metallic cladding stainless steel armor, and a bright yellow UV-resistant plenum-rated jacket, this cable is engineered for versatility and durability\u2014indoors or out.\n\nThe Passivated Metallic Cladding delivers superior crush resistance, rodent protection, and corrosion defense\u2014ideal for industrial zones, data centers, campuses, and outdoor installations in harsh or unpredictable conditions.\n\nEach fiber is individually buffered for easy termination, flexible routing, and direct connectorization without fan-out kits. Perfect for patching, splicing, and rapid deployment.\nEach of the six singlemode fibers is tight buffered, enabling easy termination without fan-out kits and faster field deployment, especially in emergency or constrained-access environments.\n\nP2P designs and manufactures custom passivated metallic cladding armor from 3 Hour burn, Power and Fiber in  a single jacket, SM & MM in single jacket to the smallest outer diameter and most rugged cables for any harsh and mission critical enviornments.\n\nFeatures:\n\u2022 500 Foot Reel\n\u2022 Singlemode\n\u2022 6 Strand\n\u2022 Stainless Steel Armor\n\u2022 Tight Buffer\n\u2022 Bend Insensitive G657A2\n\u2022 Indoor/Outdoor Plenum Rated\n\u2022 UV-Resistant\n\u2022 6.0mm outer diameter\n\u2022 Smallest outer diameter armored cable\n\u2022 500% increase in pathway capacity and major reduction in cable congestion versus AIA armor.\n\u2022 25 Year Warranty",
      "alternative_product_ids": [],
      "accessory_product_ids": [],
      "website_size_x": 1,
      "website_size_y": 1,
      "website_ribbon_id": false,
      "website_sequence": 10055,
      "public_categ_ids": [],
      "publish_date": "2026-01-05 10:33:34",
      "product_template_image_ids": [],
      "base_unit_count": 0,
      "base_unit_id": false,
      "base_unit_price": 0,
      "base_unit_name": "Units",
      "compare_list_price": 0,
      "allow_out_of_stock_order": true,
      "available_threshold": 5,
      "show_availability": false,
      "out_of_stock_message": false,
      "x_studio_sku": false,
      "x_studio_char_field_46r_1jcm2avfl": false,
      "x_studio_features": false,
      "x_studio_integer_field_8jh_1jcm2jhuf": 0,
      "x_studio_selection_field_75k_1jcm2f0o4": false,
      "x_studio_stock_quantity": 0,
      "x_studio_is_custom": false,
      "x_studio_product_rating": false,
      "x_studio_jacket_color": false,
      "x_studio_fiber_count": 0,
      "x_studio_testing": false,
      "x_studio_vendor_model_": false,
      "x_studio_cable_type": false,
      "x_studio_test": false,
      "x_studio_map_minimum_advertised_price": "649.99",
      "x_studio_data_sheet_pdf": "https://drive.google.com/uc?export=download&id=1CZ61sN7Z9tbz1yNbFYR5Rrrp5cd_vCrf",
      "x_studio_purchase_measure": "1",
      "x_studio_country_of_origin": "Taiwan",
      "x_studio_width_inches": "14\"",
      "x_studio_weight_lbs": "26lbs",
      "x_studio_feature_list": false,
      "x_studio_distributor_cost": "490",
      "x_studio_moq_minimum_order_quantity": "1",
      "x_studio_length_inches": "14\"",
      "x_studio_height_inches": "14\"",
      "x_studio_upc_code": "743634043981",
      "x_studio_ship_ups_or_freight": "UPS",
      "x_studio_warranty": "25 years",
      "x_studio_length_available": false
    }
  ]
}
```
## GET `/partners/fields`

Status: 200

```json
{
  "id": {
    "required": false,
    "string": "ID",
    "type": "integer"
  },
  "display_name": {
    "required": false,
    "string": "Display Name",
    "type": "char"
  },
  "is_seo_optimized": {
    "required": false,
    "string": "SEO optimized",
    "type": "boolean"
  },
  "website_meta_title": {
    "required": false,
    "string": "Website meta title",
    "type": "char"
  },
  "website_meta_description": {
    "required": false,
    "string": "Website meta description",
    "type": "text"
  },
  "website_meta_keywords": {
    "required": false,
    "string": "Website meta keywords",
    "type": "char"
  },
  "website_meta_og_img": {
    "required": false,
    "string": "Website opengraph image",
    "type": "char"
  },
  "seo_name": {
    "required": false,
    "string": "Seo name",
    "type": "char"
  },
  "website_id": {
    "required": false,
    "string": "Website",
    "type": "many2one"
  },
  "website_published": {
    "required": false,
    "string": "Visible on current website",
    "type": "boolean"
  },
  "is_published": {
    "required": false,
    "string": "Is Published",
    "type": "boolean"
  },
  "can_publish": {
    "required": false,
    "string": "Can Publish",
    "type": "boolean"
  },
  "website_url": {
    "required": false,
    "string": "Website URL",
    "type": "char"
  },
  "website_absolute_url": {
    "required": false,
    "string": "Website Absolute URL",
    "type": "char"
  },
  "message_is_follower": {
    "required": false,
    "string": "Is Follower",
    "type": "boolean"
  },
  "message_follower_ids": {
    "required": false,
    "string": "Followers",
    "type": "one2many"
  },
  "message_partner_ids": {
    "required": false,
    "string": "Followers (Partners)",
    "type": "many2many"
  },
  "message_ids": {
    "required": false,
    "string": "Messages",
    "type": "one2many"
  },
  "has_message": {
    "required": false,
    "string": "Has Message",
    "type": "boolean"
  },
  "message_needaction": {
    "required": false,
    "string": "Action Needed",
    "type": "boolean"
  },
  "message_needaction_counter": {
    "required": false,
    "string": "Number of Actions",
    "type": "integer"
  },
  "message_has_error": {
    "required": false,
    "string": "Message Delivery error",
    "type": "boolean"
  },
  "message_has_error_counter": {
    "required": false,
    "string": "Number of errors",
    "type": "integer"
  },
  "message_attachment_count": {
    "required": false,
    "string": "Attachment Count",
    "type": "integer"
  },
  "rating_ids": {
    "required": false,
    "string": "Ratings",
    "type": "one2many"
  },
  "website_message_ids": {
    "required": false,
    "string": "Website Messages",
    "type": "one2many"
  },
  "message_has_sms_error": {
    "required": false,
    "string": "SMS Delivery error",
    "type": "boolean"
  },
  "email_normalized": {
    "required": false,
    "string": "Normalized Email",
    "type": "char"
  },
  "is_blacklisted": {
    "required": false,
    "string": "Blacklist",
    "type": "boolean"
  },
  "message_bounce": {
    "required": false,
    "string": "Bounce",
    "type": "integer"
  },
  "activity_ids": {
    "required": false,
    "string": "Activities",
    "type": "one2many"
  },
  "activity_state": {
    "required": false,
    "string": "Activity State",
    "type": "selection"
  },
  "activity_user_id": {
    "required": false,
    "string": "Responsible User",
    "type": "many2one"
  },
  "activity_type_id": {
    "required": false,
    "string": "Next Activity Type",
    "type": "many2one"
  },
  "activity_type_icon": {
    "required": false,
    "string": "Activity Type Icon",
    "type": "char"
  },
  "activity_date_deadline": {
    "required": false,
    "string": "Next Activity Deadline",
    "type": "date"
  },
  "my_activity_date_deadline": {
    "required": false,
    "string": "My Activity Deadline",
    "type": "date"
  },
  "activity_summary": {
    "required": false,
    "string": "Next Activity Summary",
    "type": "char"
  },
  "activity_exception_decoration": {
    "required": false,
    "string": "Activity Exception Decoration",
    "type": "selection"
  },
  "activity_exception_icon": {
    "required": false,
    "string": "Icon",
    "type": "char"
  },
  "activity_calendar_event_id": {
    "required": false,
    "string": "Next Activity Calendar Event",
    "type": "many2one"
  },
  "image_1920": {
    "required": false,
    "string": "Image",
    "type": "binary"
  },
  "image_1024": {
    "required": false,
    "string": "Image 1024",
    "type": "binary"
  },
  "image_512": {
    "required": false,
    "string": "Image 512",
    "type": "binary"
  },
  "image_256": {
    "required": false,
    "string": "Image 256",
    "type": "binary"
  },
  "image_128": {
    "required": false,
    "string": "Image 128",
    "type": "binary"
  },
  "avatar_1920": {
    "required": false,
    "string": "Avatar",
    "type": "binary"
  },
  "avatar_1024": {
    "required": false,
    "string": "Avatar 1024",
    "type": "binary"
  },
  "avatar_512": {
    "required": false,
    "string": "Avatar 512",
    "type": "binary"
  },
  "avatar_256": {
    "required": false,
    "string": "Avatar 256",
    "type": "binary"
  },
  "avatar_128": {
    "required": false,
    "string": "Avatar 128",
    "type": "binary"
  },
  "name": {
    "required": false,
    "string": "Name",
    "type": "char"
  },
  "complete_name": {
    "required": false,
    "string": "Complete Name",
    "type": "char"
  },
  "parent_id": {
    "required": false,
    "string": "Related Company",
    "type": "many2one"
  },
  "parent_name": {
    "required": false,
    "string": "Parent name",
    "type": "char"
  },
  "child_ids": {
    "required": false,
    "string": "Contact",
    "type": "one2many"
  },
  "ref": {
    "required": false,
    "string": "Reference",
    "type": "char"
  },
  "lang": {
    "required": false,
    "string": "Language",
    "type": "selection"
  },
  "active_lang_count": {
    "required": false,
    "string": "Active Lang Count",
    "type": "integer"
  },
  "tz": {
    "required": false,
    "string": "Timezone",
    "type": "selection"
  },
  "tz_offset": {
    "required": false,
    "string": "Timezone offset",
    "type": "char"
  },
  "user_id": {
    "required": false,
    "string": "Salesperson",
    "type": "many2one"
  },
  "vat": {
    "required": false,
    "string": "Tax ID",
    "type": "char"
  },
  "vat_label": {
    "required": false,
    "string": "Tax ID Label",
    "type": "char"
  },
  "same_vat_partner_id": {
    "required": false,
    "string": "Partner with same Tax ID",
    "type": "many2one"
  },
  "same_company_registry_partner_id": {
    "required": false,
    "string": "Partner with same Company Registry",
    "type": "many2one"
  },
  "company_registry": {
    "required": false,
    "string": "Company ID",
    "type": "char"
  },
  "company_registry_label": {
    "required": false,
    "string": "Company ID Label",
    "type": "char"
  },
  "company_registry_placeholder": {
    "required": false,
    "string": "Company Registry Placeholder",
    "type": "char"
  },
  "bank_ids": {
    "required": false,
    "string": "Banks",
    "type": "one2many"
  },
  "website": {
    "required": false,
    "string": "Website Link",
    "type": "char"
  },
  "comment": {
    "required": false,
    "string": "Notes",
    "type": "html"
  },
  "category_id": {
    "required": false,
    "string": "Tags",
    "type": "many2many"
  },
  "active": {
    "required": false,
    "string": "Active",
    "type": "boolean"
  },
  "employee": {
    "required": false,
    "string": "Employee",
    "type": "boolean"
  },
  "function": {
    "required": false,
    "string": "Job Position",
    "type": "char"
  },
  "type": {
    "required": false,
    "string": "Address Type",
    "type": "selection"
  },
  "type_address_label": {
    "required": false,
    "string": "Address Type Description",
    "type": "char"
  },
  "street": {
    "required": false,
    "string": "Street",
    "type": "char"
  },
  "street2": {
    "required": false,
    "string": "Street2",
    "type": "char"
  },
  "zip": {
    "required": false,
    "string": "Zip",
    "type": "char"
  },
  "city": {
    "required": false,
    "string": "City",
    "type": "char"
  },
  "state_id": {
    "required": false,
    "string": "State",
    "type": "many2one"
  },
  "country_id": {
    "required": false,
    "string": "Country",
    "type": "many2one"
  },
  "country_code": {
    "required": false,
    "string": "Country Code",
    "type": "char"
  },
  "partner_latitude": {
    "required": false,
    "string": "Geo Latitude",
    "type": "float"
  },
  "partner_longitude": {
    "required": false,
    "string": "Geo Longitude",
    "type": "float"
  },
  "email": {
    "required": false,
    "string": "Email",
    "type": "char"
  },
  "email_formatted": {
    "required": false,
    "string": "Formatted Email",
    "type": "char"
  },
  "phone": {
    "required": false,
    "string": "Phone",
    "type": "char"
  },
  "is_company": {
    "required": false,
    "string": "Is a Company",
    "type": "boolean"
  },
  "is_public": {
    "required": false,
    "string": "Is Public",
    "type": "boolean"
  },
  "industry_id": {
    "required": false,
    "string": "Industry",
    "type": "many2one"
  },
  "company_type": {
    "required": false,
    "string": "Company Type",
    "type": "selection"
  },
  "company_id": {
    "required": false,
    "string": "Company",
    "type": "many2one"
  },
  "color": {
    "required": false,
    "string": "Color Index",
    "type": "integer"
  },
  "user_ids": {
    "required": false,
    "string": "Users",
    "type": "one2many"
  },
  "main_user_id": {
    "required": false,
    "string": "Main User",
    "type": "many2one"
  },
  "partner_share": {
    "required": false,
    "string": "Share Partner",
    "type": "boolean"
  },
  "contact_address": {
    "required": false,
    "string": "Complete Address",
    "type": "char"
  },
  "commercial_partner_id": {
    "required": false,
    "string": "Commercial Entity",
    "type": "many2one"
  },
  "commercial_company_name": {
    "required": false,
    "string": "Company Name Entity",
    "type": "char"
  },
  "company_name": {
    "required": false,
    "string": "Company Name",
    "type": "char"
  },
  "barcode": {
    "required": false,
    "string": "Barcode",
    "type": "char"
  },
  "self": {
    "required": false,
    "string": "Self",
    "type": "many2one"
  },
  "application_statistics": {
    "required": false,
    "string": "Stats",
    "type": "json"
  },
  "create_uid": {
    "required": false,
    "string": "Created by",
    "type": "many2one"
  },
  "create_date": {
    "required": false,
    "string": "Created on",
    "type": "datetime"
  },
  "write_uid": {
    "required": false,
    "string": "Last Updated by",
    "type": "many2one"
  },
  "write_date": {
    "required": false,
    "string": "Last Updated on",
    "type": "datetime"
  },
  "contact_address_complete": {
    "required": false,
    "string": "Contact Address Complete",
    "type": "char"
  },
  "channel_ids": {
    "required": false,
    "string": "Channels",
    "type": "many2many"
  },
  "channel_member_ids": {
    "required": false,
    "string": "Channel Member",
    "type": "one2many"
  },
  "is_in_call": {
    "required": false,
    "string": "Is In Call",
    "type": "boolean"
  },
  "rtc_session_ids": {
    "required": false,
    "string": "Rtc Session",
    "type": "one2many"
  },
  "contact_address_inline": {
    "required": false,
    "string": "Inlined Complete Address",
    "type": "char"
  },
  "starred_message_ids": {
    "required": false,
    "string": "Starred Message",
    "type": "many2many"
  },
  "im_status": {
    "required": false,
    "string": "IM Status",
    "type": "char"
  },
  "offline_since": {
    "required": false,
    "string": "Offline since",
    "type": "datetime"
  },
  "image_medium": {
    "required": false,
    "string": "Medium-sized image",
    "type": "binary"
  },
  "signup_type": {
    "required": false,
    "string": "Signup Token Type",
    "type": "char"
  },
  "meeting_count": {
    "required": false,
    "string": "# Meetings",
    "type": "integer"
  },
  "meeting_ids": {
    "required": false,
    "string": "Meetings",
    "type": "many2many"
  },
  "calendar_last_notif_ack": {
    "required": false,
    "string": "Last notification marked as read from base Calendar",
    "type": "datetime"
  },
  "phone_sanitized": {
    "required": false,
    "string": "Sanitized Number",
    "type": "char"
  },
  "phone_sanitized_blacklisted": {
    "required": false,
    "string": "Phone Blacklisted",
    "type": "boolean"
  },
  "phone_blacklisted": {
    "required": false,
    "string": "Blacklisted Phone is Phone",
    "type": "boolean"
  },
  "phone_mobile_search": {
    "required": false,
    "string": "Phone Number",
    "type": "char"
  },
  "property_product_pricelist": {
    "required": false,
    "string": "Pricelist",
    "type": "many2one"
  },
  "specific_property_product_pricelist": {
    "required": false,
    "string": "Specific Property Product Pricelist",
    "type": "many2one"
  },
  "ocn_token": {
    "required": false,
    "string": "OCN Token",
    "type": "char"
  },
  "payment_token_ids": {
    "required": false,
    "string": "Payment Tokens",
    "type": "one2many"
  },
  "payment_token_count": {
    "required": false,
    "string": "Payment Token Count",
    "type": "integer"
  },
  "fiscal_country_codes": {
    "required": false,
    "string": "Fiscal Country Codes",
    "type": "char"
  },
  "partner_vat_placeholder": {
    "required": false,
    "string": "Partner Vat Placeholder",
    "type": "char"
  },
  "partner_company_registry_placeholder": {
    "required": false,
    "string": "Partner Company Registry Placeholder",
    "type": "char"
  },
  "duplicate_bank_partner_ids": {
    "required": false,
    "string": "Duplicate Bank Partner",
    "type": "many2many"
  },
  "credit": {
    "required": false,
    "string": "Total Receivable",
    "type": "monetary"
  },
  "credit_to_invoice": {
    "required": false,
    "string": "Credit To Invoice",
    "type": "monetary"
  },
  "credit_limit": {
    "required": false,
    "string": "Credit Limit",
    "type": "float"
  },
  "use_partner_credit_limit": {
    "required": false,
    "string": "Partner Limit",
    "type": "boolean"
  },
  "show_credit_limit": {
    "required": false,
    "string": "Show Credit Limit",
    "type": "boolean"
  },
  "days_sales_outstanding": {
    "required": false,
    "string": "Days Sales Outstanding (DSO)",
    "type": "float"
  },
  "debit": {
    "required": false,
    "string": "Total Payable",
    "type": "monetary"
  },
  "total_invoiced": {
    "required": false,
    "string": "Total Invoiced",
    "type": "monetary"
  },
  "currency_id": {
    "required": false,
    "string": "Currency",
    "type": "many2one"
  },
  "property_account_payable_id": {
    "required": false,
    "string": "Account Payable",
    "type": "many2one"
  },
  "property_account_receivable_id": {
    "required": false,
    "string": "Account Receivable",
    "type": "many2one"
  },
  "property_account_position_id": {
    "required": false,
    "string": "Fiscal Position",
    "type": "many2one"
  },
  "property_payment_term_id": {
    "required": false,
    "string": "Customer Payment Terms",
    "type": "many2one"
  },
  "property_supplier_payment_term_id": {
    "required": false,
    "string": "Vendor Payment Terms",
    "type": "many2one"
  },
  "ref_company_ids": {
    "required": false,
    "string": "Companies that refers to partner",
    "type": "one2many"
  },
  "supplier_invoice_count": {
    "required": false,
    "string": "# Vendor Bills",
    "type": "integer"
  },
  "account_move_count": {
    "required": false,
    "string": "Account Move Count",
    "type": "integer"
  },
  "invoice_ids": {
    "required": false,
    "string": "Invoices",
    "type": "one2many"
  },
  "contract_ids": {
    "required": false,
    "string": "Partner Contracts",
    "type": "one2many"
  },
  "bank_account_count": {
    "required": false,
    "string": "Bank",
    "type": "integer"
  },
  "trust": {
    "required": false,
    "string": "Degree of trust you have in this debtor",
    "type": "selection"
  },
  "ignore_abnormal_invoice_date": {
    "required": false,
    "string": "Ignore Abnormal Invoice Date",
    "type": "boolean"
  },
  "ignore_abnormal_invoice_amount": {
    "required": false,
    "string": "Ignore Abnormal Invoice Amount",
    "type": "boolean"
  },
  "invoice_sending_method": {
    "required": false,
    "string": "Invoice sending",
    "type": "selection"
  },
  "invoice_edi_format": {
    "required": false,
    "string": "eInvoice format",
    "type": "selection"
  },
  "invoice_edi_format_store": {
    "required": false,
    "string": "Invoice Edi Format Store",
    "type": "char"
  },
  "display_invoice_edi_format": {
    "required": false,
    "string": "Display Invoice Edi Format",
    "type": "boolean"
  },
  "invoice_template_pdf_report_id": {
    "required": false,
    "string": "Invoice report",
    "type": "many2one"
  },
  "available_invoice_template_pdf_report_ids": {
    "required": false,
    "string": "Available Invoice Template Pdf Report",
    "type": "one2many"
  },
  "display_invoice_template_pdf_report_id": {
    "required": false,
    "string": "Display Invoice Template Pdf Report",
    "type": "boolean"
  },
  "supplier_rank": {
    "required": false,
    "string": "Supplier Rank",
    "type": "integer"
  },
  "customer_rank": {
    "required": false,
    "string": "Customer Rank",
    "type": "integer"
  },
  "autopost_bills": {
    "required": true,
    "string": "Auto-post bills",
    "type": "selection"
  },
  "duplicated_bank_account_partners_count": {
    "required": false,
    "string": "Duplicated Bank Account Partners Count",
    "type": "integer"
  },
  "property_outbound_payment_method_line_id": {
    "required": false,
    "string": "Property Outbound Payment Method Line",
    "type": "many2one"
  },
  "property_inbound_payment_method_line_id": {
    "required": false,
    "string": "Property Inbound Payment Method Line",
    "type": "many2one"
  },
  "opportunity_ids": {
    "required": false,
    "string": "Opportunities",
    "type": "one2many"
  },
  "opportunity_count": {
    "required": false,
    "string": "Opportunity Count",
    "type": "integer"
  },
  "user_livechat_username": {
    "required": false,
    "string": "User Livechat Username",
    "type": "char"
  },
  "chatbot_script_ids": {
    "required": false,
    "string": "Chatbot Script",
    "type": "one2many"
  },
  "livechat_channel_count": {
    "required": false,
    "string": "Livechat Channel Count",
    "type": "integer"
  },
  "property_stock_customer": {
    "required": false,
    "string": "Customer Location",
    "type": "many2one"
  },
  "property_stock_supplier": {
    "required": false,
    "string": "Vendor Location",
    "type": "many2one"
  },
  "picking_warn_msg": {
    "required": false,
    "string": "Message for Stock Picking",
    "type": "text"
  },
  "visitor_ids": {
    "required": false,
    "string": "Visitors",
    "type": "one2many"
  },
  "is_ubl_format": {
    "required": false,
    "string": "Is Ubl Format",
    "type": "boolean"
  },
  "is_peppol_edi_format": {
    "required": false,
    "string": "Is Peppol Edi Format",
    "type": "boolean"
  },
  "peppol_endpoint": {
    "required": false,
    "string": "Peppol Endpoint",
    "type": "char"
  },
  "peppol_eas": {
    "required": false,
    "string": "Peppol e-address (EAS)",
    "type": "selection"
  },
  "available_peppol_eas": {
    "required": false,
    "string": "Available Peppol Eas",
    "type": "json"
  },
  "vies_valid": {
    "required": false,
    "string": "Intra-Community Valid",
    "type": "boolean"
  },
  "perform_vies_validation": {
    "required": false,
    "string": "Perform Vies Validation",
    "type": "boolean"
  },
  "website_description": {
    "required": false,
    "string": "Website Partner Full Description",
    "type": "html"
  },
  "website_short_description": {
    "required": false,
    "string": "Website Partner Short Description",
    "type": "text"
  },
  "online_partner_information": {
    "required": false,
    "string": "Online Partner Information",
    "type": "char"
  },
  "account_represented_company_ids": {
    "required": false,
    "string": "Account Represented Company",
    "type": "one2many"
  },
  "l10n_in_gst_treatment": {
    "required": false,
    "string": "GST Treatment",
    "type": "selection"
  },
  "l10n_in_pan": {
    "required": false,
    "string": "PAN",
    "type": "char"
  },
  "display_pan_warning": {
    "required": false,
    "string": "Display pan warning",
    "type": "boolean"
  },
  "l10n_in_gst_state_warning": {
    "required": false,
    "string": "L10N In Gst State Warning",
    "type": "char"
  },
  "l10n_in_is_gst_registered_enabled": {
    "required": false,
    "string": "L10N In Is Gst Registered Enabled",
    "type": "boolean"
  },
  "l10n_in_gstin_verified_status": {
    "required": false,
    "string": "GST Status",
    "type": "boolean"
  },
  "l10n_in_gstin_verified_date": {
    "required": false,
    "string": "GSTIN Verified Date",
    "type": "date"
  },
  "l10n_in_gstin_status_feature_enabled": {
    "required": false,
    "string": "L10N In Gstin Status Feature Enabled",
    "type": "boolean"
  },
  "sale_order_count": {
    "required": false,
    "string": "Sale Order Count",
    "type": "integer"
  },
  "sale_order_ids": {
    "required": false,
    "string": "Sales Order",
    "type": "one2many"
  },
  "sale_warn_msg": {
    "required": false,
    "string": "Message for Sales Order",
    "type": "text"
  },
  "followup_next_action_date": {
    "required": false,
    "string": "Next reminder",
    "type": "date"
  },
  "unreconciled_aml_ids": {
    "required": false,
    "string": "Unreconciled Aml",
    "type": "one2many"
  },
  "unpaid_invoice_ids": {
    "required": false,
    "string": "Unpaid Invoice",
    "type": "one2many"
  },
  "unpaid_invoices_count": {
    "required": false,
    "string": "Unpaid Invoices Count",
    "type": "integer"
  },
  "total_all_due": {
    "required": false,
    "string": "Total All Due",
    "type": "monetary"
  },
  "total_all_overdue": {
    "required": false,
    "string": "Total All Overdue",
    "type": "monetary"
  },
  "total_due": {
    "required": false,
    "string": "Total Due",
    "type": "monetary"
  },
  "total_overdue": {
    "required": false,
    "string": "Total Overdue",
    "type": "monetary"
  },
  "followup_status": {
    "required": false,
    "string": "Follow-up Status",
    "type": "selection"
  },
  "followup_line_id": {
    "required": false,
    "string": "Follow-up Level",
    "type": "many2one"
  },
  "followup_reminder_type": {
    "required": false,
    "string": "Reminders",
    "type": "selection"
  },
  "followup_responsible_id": {
    "required": false,
    "string": "Responsible",
    "type": "many2one"
  },
  "has_moves": {
    "required": false,
    "string": "Has Moves",
    "type": "boolean"
  },
  "property_delivery_carrier_id": {
    "required": false,
    "string": "Delivery Method",
    "type": "many2one"
  },
  "is_pickup_location": {
    "required": false,
    "string": "Is Pickup Location",
    "type": "boolean"
  },
  "property_ups_carrier_account": {
    "required": false,
    "string": "UPS Account Number",
    "type": "char"
  },
  "bill_my_account": {
    "required": false,
    "string": "Bill My Account",
    "type": "boolean"
  },
  "wishlist_ids": {
    "required": false,
    "string": "Wishlist",
    "type": "one2many"
  }
}
```

## GET `/partners`

Status: 200

```json
{
  "success": true,
  "count": 3,
  "partners": [
    {
      "id": 1,
      "name": "Point 2 Point Communications-v2",
      "email": "rchoudhary@wedefineit.com",
      "phone": "18882349348",
      "street": "26 Broadway Ste 934",
      "city": "New York",
      "state_id": [
        35,
        "New York (US)"
      ],
      "country_id": [
        104,
        "India"
      ],
      "zip": "10004-1717",
      "customer_rank": 0,
      "supplier_rank": 0,
      "company_type": "company",
      "vat": "6230697",
      "is_company": true,
      "active": true
    },
    {
      "id": 3,
      "name": "Rishabh Choudhary",
      "email": "appmanagent@technicalservices.us",
      "phone": "+91 98108 71195",
      "street": "HH",
      "city": "gurgaon",
      "state_id": [
        589,
        "Haryana (IN)"
      ],
      "country_id": [
        104,
        "India"
      ],
      "zip": "122001",
      "customer_rank": 3,
      "supplier_rank": 0,
      "company_type": "person",
      "vat": "",
      "is_company": false,
      "active": true
    },
    {
      "id": 8,
      "name": "Rishabh",
      "email": "rchoudhary@wedefineit.com",
      "phone": "9810871195",
      "street": "New York",
      "city": "New York",
      "state_id": [
        35,
        "New York (US)"
      ],
      "country_id": [
        233,
        "United States"
      ],
      "zip": "100776",
      "customer_rank": 2,
      "supplier_rank": 0,
      "company_type": "person",
      "vat": "",
      "is_company": false,
      "active": true
    }
  ]
}
```

## GET `/partners/1`

Status: 200

```json
{
  "success": true,
  "contact": {
    "id": 1,
    "name": "Point 2 Point Communications-v2",
    "email": "rchoudhary@wedefineit.com",
    "phone": "18882349348",
    "street": "26 Broadway Ste 934",
    "city": "New York",
    "state_id": [
      35,
      "New York (US)"
    ],
    "country_id": [
      104,
      "India"
    ],
    "zip": "10004-1717",
    "customer_rank": 0,
    "supplier_rank": 0,
    "company_type": "company",
    "vat": "6230697",
    "is_company": true,
    "active": true
  }
}
```

## GET `/sales-orders/fields`

Status: 200

```json
{
  "id": {
    "required": false,
    "string": "ID",
    "type": "integer"
  },
  "display_name": {
    "required": false,
    "string": "Display Name",
    "type": "char"
  },
  "campaign_id": {
    "required": false,
    "string": "Campaign",
    "type": "many2one"
  },
  "source_id": {
    "required": false,
    "string": "Source",
    "type": "many2one"
  },
  "medium_id": {
    "required": false,
    "string": "Medium",
    "type": "many2one"
  },
  "activity_ids": {
    "required": false,
    "string": "Activities",
    "type": "one2many"
  },
  "activity_state": {
    "required": false,
    "string": "Activity State",
    "type": "selection"
  },
  "activity_user_id": {
    "required": false,
    "string": "Responsible User",
    "type": "many2one"
  },
  "activity_type_id": {
    "required": false,
    "string": "Next Activity Type",
    "type": "many2one"
  },
  "activity_type_icon": {
    "required": false,
    "string": "Activity Type Icon",
    "type": "char"
  },
  "activity_date_deadline": {
    "required": false,
    "string": "Next Activity Deadline",
    "type": "date"
  },
  "my_activity_date_deadline": {
    "required": false,
    "string": "My Activity Deadline",
    "type": "date"
  },
  "activity_summary": {
    "required": false,
    "string": "Next Activity Summary",
    "type": "char"
  },
  "activity_exception_decoration": {
    "required": false,
    "string": "Activity Exception Decoration",
    "type": "selection"
  },
  "activity_exception_icon": {
    "required": false,
    "string": "Icon",
    "type": "char"
  },
  "activity_calendar_event_id": {
    "required": false,
    "string": "Next Activity Calendar Event",
    "type": "many2one"
  },
  "message_is_follower": {
    "required": false,
    "string": "Is Follower",
    "type": "boolean"
  },
  "message_follower_ids": {
    "required": false,
    "string": "Followers",
    "type": "one2many"
  },
  "message_partner_ids": {
    "required": false,
    "string": "Followers (Partners)",
    "type": "many2many"
  },
  "message_ids": {
    "required": false,
    "string": "Messages",
    "type": "one2many"
  },
  "has_message": {
    "required": false,
    "string": "Has Message",
    "type": "boolean"
  },
  "message_needaction": {
    "required": false,
    "string": "Action Needed",
    "type": "boolean"
  },
  "message_needaction_counter": {
    "required": false,
    "string": "Number of Actions",
    "type": "integer"
  },
  "message_has_error": {
    "required": false,
    "string": "Message Delivery error",
    "type": "boolean"
  },
  "message_has_error_counter": {
    "required": false,
    "string": "Number of errors",
    "type": "integer"
  },
  "message_attachment_count": {
    "required": false,
    "string": "Attachment Count",
    "type": "integer"
  },
  "rating_ids": {
    "required": false,
    "string": "Ratings",
    "type": "one2many"
  },
  "website_message_ids": {
    "required": false,
    "string": "Website Messages",
    "type": "one2many"
  },
  "message_has_sms_error": {
    "required": false,
    "string": "SMS Delivery error",
    "type": "boolean"
  },
  "access_url": {
    "required": false,
    "string": "Portal Access URL",
    "type": "char"
  },
  "access_token": {
    "required": false,
    "string": "Security Token",
    "type": "char"
  },
  "access_warning": {
    "required": false,
    "string": "Access warning",
    "type": "text"
  },
  "name": {
    "required": true,
    "string": "Order Reference",
    "type": "char"
  },
  "company_id": {
    "required": true,
    "string": "Company",
    "type": "many2one"
  },
  "partner_id": {
    "required": true,
    "string": "Customer",
    "type": "many2one"
  },
  "state": {
    "required": false,
    "string": "Status",
    "type": "selection"
  },
  "locked": {
    "required": false,
    "string": "Locked",
    "type": "boolean"
  },
  "has_archived_products": {
    "required": false,
    "string": "Has Archived Products",
    "type": "boolean"
  },
  "client_order_ref": {
    "required": false,
    "string": "Customer Reference",
    "type": "char"
  },
  "create_date": {
    "required": false,
    "string": "Creation Date",
    "type": "datetime"
  },
  "commitment_date": {
    "required": false,
    "string": "Delivery Date",
    "type": "datetime"
  },
  "date_order": {
    "required": true,
    "string": "Order Date",
    "type": "datetime"
  },
  "origin": {
    "required": false,
    "string": "Source Document",
    "type": "char"
  },
  "reference": {
    "required": false,
    "string": "Payment Ref.",
    "type": "char"
  },
  "pending_email_template_id": {
    "required": false,
    "string": "Pending Email Template",
    "type": "many2one"
  },
  "require_signature": {
    "required": false,
    "string": "Online signature",
    "type": "boolean"
  },
  "require_payment": {
    "required": false,
    "string": "Online payment",
    "type": "boolean"
  },
  "prepayment_percent": {
    "required": false,
    "string": "Prepayment percentage",
    "type": "float"
  },
  "signature": {
    "required": false,
    "string": "Signature",
    "type": "binary"
  },
  "signed_by": {
    "required": false,
    "string": "Signed By",
    "type": "char"
  },
  "signed_on": {
    "required": false,
    "string": "Signed On",
    "type": "datetime"
  },
  "validity_date": {
    "required": false,
    "string": "Expiration",
    "type": "date"
  },
  "journal_id": {
    "required": false,
    "string": "Invoicing Journal",
    "type": "many2one"
  },
  "note": {
    "required": false,
    "string": "Terms and conditions",
    "type": "html"
  },
  "partner_invoice_id": {
    "required": true,
    "string": "Invoice Address",
    "type": "many2one"
  },
  "partner_shipping_id": {
    "required": true,
    "string": "Delivery Address",
    "type": "many2one"
  },
  "fiscal_position_id": {
    "required": false,
    "string": "Fiscal Position",
    "type": "many2one"
  },
  "payment_term_id": {
    "required": false,
    "string": "Payment Terms",
    "type": "many2one"
  },
  "pricelist_id": {
    "required": false,
    "string": "Pricelist",
    "type": "many2one"
  },
  "currency_id": {
    "required": false,
    "string": "Currency",
    "type": "many2one"
  },
  "currency_rate": {
    "required": false,
    "string": "Currency Rate",
    "type": "float"
  },
  "user_id": {
    "required": false,
    "string": "Salesperson",
    "type": "many2one"
  },
  "team_id": {
    "required": false,
    "string": "Sales Team",
    "type": "many2one"
  },
  "order_line": {
    "required": false,
    "string": "Order Lines",
    "type": "one2many"
  },
  "amount_untaxed": {
    "required": false,
    "string": "Untaxed Amount",
    "type": "monetary"
  },
  "amount_tax": {
    "required": false,
    "string": "Taxes",
    "type": "monetary"
  },
  "amount_total": {
    "required": false,
    "string": "Total",
    "type": "monetary"
  },
  "amount_to_invoice": {
    "required": false,
    "string": "Un-invoiced Balance",
    "type": "monetary"
  },
  "amount_invoiced": {
    "required": false,
    "string": "Already invoiced",
    "type": "monetary"
  },
  "invoice_count": {
    "required": false,
    "string": "Invoice Count",
    "type": "integer"
  },
  "invoice_ids": {
    "required": false,
    "string": "Invoices",
    "type": "many2many"
  },
  "invoice_status": {
    "required": false,
    "string": "Invoice Status",
    "type": "selection"
  },
  "sale_warning_text": {
    "required": false,
    "string": "Sale Warning",
    "type": "text"
  },
  "transaction_ids": {
    "required": false,
    "string": "Transactions",
    "type": "many2many"
  },
  "authorized_transaction_ids": {
    "required": false,
    "string": "Authorized Transactions",
    "type": "many2many"
  },
  "amount_paid": {
    "required": false,
    "string": "Payment Transactions Amount",
    "type": "float"
  },
  "tag_ids": {
    "required": false,
    "string": "Tags",
    "type": "many2many"
  },
  "amount_undiscounted": {
    "required": false,
    "string": "Amount Before Discount",
    "type": "float"
  },
  "country_code": {
    "required": false,
    "string": "Country code",
    "type": "char"
  },
  "company_price_include": {
    "required": false,
    "string": "Default Sales Price Include",
    "type": "selection"
  },
  "duplicated_order_ids": {
    "required": false,
    "string": "Duplicated Order",
    "type": "many2many"
  },
  "expected_date": {
    "required": false,
    "string": "Expected Date",
    "type": "datetime"
  },
  "is_expired": {
    "required": false,
    "string": "Is Expired",
    "type": "boolean"
  },
  "partner_credit_warning": {
    "required": false,
    "string": "Partner Credit Warning",
    "type": "text"
  },
  "tax_calculation_rounding_method": {
    "required": false,
    "string": "Tax Calculation Rounding Method",
    "type": "selection"
  },
  "tax_country_id": {
    "required": false,
    "string": "Tax Country",
    "type": "many2one"
  },
  "tax_totals": {
    "required": false,
    "string": "Tax Totals",
    "type": "binary"
  },
  "terms_type": {
    "required": false,
    "string": "Terms & Conditions format",
    "type": "selection"
  },
  "type_name": {
    "required": false,
    "string": "Type Name",
    "type": "char"
  },
  "show_update_fpos": {
    "required": false,
    "string": "Has Fiscal Position Changed",
    "type": "boolean"
  },
  "has_active_pricelist": {
    "required": false,
    "string": "Has Active Pricelist",
    "type": "boolean"
  },
  "show_update_pricelist": {
    "required": false,
    "string": "Has Pricelist Changed",
    "type": "boolean"
  },
  "create_uid": {
    "required": false,
    "string": "Created by",
    "type": "many2one"
  },
  "write_uid": {
    "required": false,
    "string": "Last Updated by",
    "type": "many2one"
  },
  "write_date": {
    "required": false,
    "string": "Last Updated on",
    "type": "datetime"
  },
  "pickup_location_data": {
    "required": false,
    "string": "Pickup Location Data",
    "type": "json"
  },
  "carrier_id": {
    "required": false,
    "string": "Delivery Method",
    "type": "many2one"
  },
  "delivery_message": {
    "required": false,
    "string": "Delivery Message",
    "type": "char"
  },
  "delivery_set": {
    "required": false,
    "string": "Delivery Set",
    "type": "boolean"
  },
  "recompute_delivery_price": {
    "required": false,
    "string": "Delivery cost should be recomputed",
    "type": "boolean"
  },
  "is_all_service": {
    "required": false,
    "string": "Service Product",
    "type": "boolean"
  },
  "shipping_weight": {
    "required": false,
    "string": "Shipping Weight",
    "type": "float"
  },
  "l10n_in_reseller_partner_id": {
    "required": false,
    "string": "Reseller",
    "type": "many2one"
  },
  "opportunity_id": {
    "required": false,
    "string": "Opportunity",
    "type": "many2one"
  },
  "sale_order_template_id": {
    "required": false,
    "string": "Quotation Template",
    "type": "many2one"
  },
  "sale_order_option_ids": {
    "required": false,
    "string": "Optional Products Lines",
    "type": "one2many"
  },
  "incoterm": {
    "required": false,
    "string": "Incoterm",
    "type": "many2one"
  },
  "incoterm_location": {
    "required": false,
    "string": "Incoterm Location",
    "type": "char"
  },
  "picking_policy": {
    "required": true,
    "string": "Shipping Policy",
    "type": "selection"
  },
  "warehouse_id": {
    "required": false,
    "string": "Warehouse",
    "type": "many2one"
  },
  "picking_ids": {
    "required": false,
    "string": "Transfers",
    "type": "one2many"
  },
  "delivery_count": {
    "required": false,
    "string": "Delivery Orders",
    "type": "integer"
  },
  "delivery_status": {
    "required": false,
    "string": "Delivery Status",
    "type": "selection"
  },
  "late_availability": {
    "required": false,
    "string": "Late Availability",
    "type": "boolean"
  },
  "procurement_group_id": {
    "required": false,
    "string": "Procurement Group",
    "type": "many2one"
  },
  "effective_date": {
    "required": false,
    "string": "Effective Date",
    "type": "datetime"
  },
  "json_popover": {
    "required": false,
    "string": "JSON data for the popover widget",
    "type": "char"
  },
  "show_json_popover": {
    "required": false,
    "string": "Has late picking",
    "type": "boolean"
  },
  "available_quotation_document_ids": {
    "required": false,
    "string": "Available Quotation Documents",
    "type": "many2many"
  },
  "is_pdf_quote_builder_available": {
    "required": false,
    "string": "Is Pdf Quote Builder Available",
    "type": "boolean"
  },
  "quotation_document_ids": {
    "required": false,
    "string": "Headers/Footers",
    "type": "many2many"
  },
  "customizable_pdf_form_fields": {
    "required": false,
    "string": "Customizable PDF Form Fields",
    "type": "json"
  },
  "spreadsheet_template_id": {
    "required": false,
    "string": "Quote calculator",
    "type": "many2one"
  },
  "spreadsheet_ids": {
    "required": false,
    "string": "Spreadsheets",
    "type": "one2many"
  },
  "spreadsheet_id": {
    "required": false,
    "string": "Spreadsheet",
    "type": "many2one"
  },
  "website_id": {
    "required": false,
    "string": "Website",
    "type": "many2one"
  },
  "cart_recovery_email_sent": {
    "required": false,
    "string": "Cart recovery email already sent",
    "type": "boolean"
  },
  "shop_warning": {
    "required": false,
    "string": "Warning",
    "type": "char"
  },
  "website_order_line": {
    "required": false,
    "string": "Order Lines displayed on Website",
    "type": "one2many"
  },
  "amount_delivery": {
    "required": false,
    "string": "Delivery Amount",
    "type": "monetary"
  },
  "cart_quantity": {
    "required": false,
    "string": "Cart Quantity",
    "type": "integer"
  },
  "only_services": {
    "required": false,
    "string": "Only Services",
    "type": "boolean"
  },
  "is_abandoned_cart": {
    "required": false,
    "string": "Abandoned Cart",
    "type": "boolean"
  },
  "partner_ups_carrier_account": {
    "required": false,
    "string": "UPS account number",
    "type": "char"
  },
  "ups_bill_my_account": {
    "required": false,
    "string": "Bill My Account",
    "type": "boolean"
  }
}
```

## GET `/sales-orders`

Status: 200

```json
{
  "success": true,
  "count": 2,
  "sales_orders": [
    {
      "id": 3,
      "name": "S00003",
      "state": "sale",
      "partner_id": [
        8,
        "Rishabh Tech, Rishabh"
      ],
      "partner_invoice_id": [
        8,
        "Rishabh Tech, Rishabh"
      ],
      "partner_shipping_id": [
        8,
        "Rishabh Tech, Rishabh"
      ],
      "date_order": "2026-01-05 11:34:10",
      "validity_date": "2026-02-04",
      "commitment_date": false,
      "user_id": [
        2,
        "Rishabh Choudhary"
      ],
      "amount_total": 114.99,
      "amount_tax": 15,
      "amount_untaxed": 99.99,
      "currency_id": [
        1,
        "USD"
      ],
      "order_line": [
        6
      ]
    },
    {
      "id": 1,
      "name": "S00001",
      "state": "sale",
      "partner_id": [
        3,
        "Rishabh Choudhary, Rishabh Choudhary"
      ],
      "partner_invoice_id": [
        3,
        "Rishabh Choudhary, Rishabh Choudhary"
      ],
      "partner_shipping_id": [
        3,
        "Rishabh Choudhary, Rishabh Choudhary"
      ],
      "date_order": "2026-01-05 11:16:57",
      "validity_date": "2025-08-16",
      "commitment_date": false,
      "user_id": [
        2,
        "Rishabh Choudhary"
      ],
      "amount_total": 29.99,
      "amount_tax": 0,
      "amount_untaxed": 29.99,
      "currency_id": [
        1,
        "USD"
      ],
      "order_line": [
        4
      ]
    }
  ]
}
```

## GET `/sales-orders/3`

Status: 200

```json
{
  "success": true,
  "sales_order": {
    "id": 3,
    "name": "S00003",
    "state": "sale",
    "partner_id": [
      8,
      "Rishabh Tech, Rishabh"
    ],
    "partner_invoice_id": [
      8,
      "Rishabh Tech, Rishabh"
    ],
    "partner_shipping_id": [
      8,
      "Rishabh Tech, Rishabh"
    ],
    "date_order": "2026-01-05 11:34:10",
    "validity_date": "2026-02-04",
    "commitment_date": false,
    "user_id": [
      2,
      "Rishabh Choudhary"
    ],
    "amount_total": 114.99,
    "amount_tax": 15,
    "amount_untaxed": 99.99,
    "currency_id": [
      1,
      "USD"
    ],
    "order_line": [
      6
    ]
  }
}
```

## GET `/purchase-orders/fields`

Status: 200

```text

```

## GET `/purchase-orders`

Status: 400

```json
{
  "error": {
    "code": 0,
    "message": "Odoo Server Error",
    "data": {
      "name": "odoo.exceptions.UserError",
      "message": "Object purchase.order doesn't exist",
      "arguments": [
        "Object purchase.order doesn't exist"
      ],
      "context": {},
      "debug": "Traceback (most recent call last):\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/http.py\", line 2255, in _transactioning\n    return service_model.retrying(func, env=self.env)\n           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/service/model.py\", line 176, in retrying\n    result = func()\n             ^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/http.py\", line 2222, in _serve_ir_http\n    response = self.dispatcher.dispatch(rule.endpoint, args)\n               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/http.py\", line 2484, in dispatch\n    result = self.request.registry['ir.http']._dispatch(endpoint)\n             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/addons/base/models/ir_http.py\", line 352, in _dispatch\n    result = endpoint(**request.params)\n             ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/http.py\", line 773, in route_wrapper\n    result = endpoint(self, *args, **params_ok)\n             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/custom/trial/saas_trial/controllers/main.py\", line 474, in jsonrpc\n    res = super().jsonrpc(service, method, args)\n          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/http.py\", line 773, in route_wrapper\n    result = endpoint(self, *args, **params_ok)\n             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/addons/rpc/controllers.py\", line 177, in jsonrpc\n    return dispatch_rpc(service, method, args)\n           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/http.py\", line 424, in dispatch_rpc\n    return dispatch(method, params)\n           ^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/service/model.py\", line 108, in dispatch\n    res = execute_kw(db, uid, model, method_, *args)\n          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/service/model.py\", line 136, in execute_kw\n    return execute(db, uid, obj, method, *args, **kw or {})\n           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/service/model.py\", line 142, in execute\n    res = execute_cr(cr, uid, obj, method, *args, **kw)\n          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/service/model.py\", line 125, in execute_cr\n    raise UserError(f\"Object {obj} doesn't exist\")  # pylint: disable=missing-gettext\n    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\nodoo.exceptions.UserError: Object purchase.order doesn't exist\n"
    }
  }
}
```

## GET `/invoices/fields`

Status: 200

```json
{
  "id": {
    "required": false,
    "string": "ID",
    "type": "integer"
  },
  "display_name": {
    "required": false,
    "string": "Display Name",
    "type": "char"
  },
  "campaign_id": {
    "required": false,
    "string": "Campaign",
    "type": "many2one"
  },
  "source_id": {
    "required": false,
    "string": "Source",
    "type": "many2one"
  },
  "medium_id": {
    "required": false,
    "string": "Medium",
    "type": "many2one"
  },
  "sequence_prefix": {
    "required": false,
    "string": "Sequence Prefix",
    "type": "char"
  },
  "sequence_number": {
    "required": false,
    "string": "Sequence Number",
    "type": "integer"
  },
  "activity_ids": {
    "required": false,
    "string": "Activities",
    "type": "one2many"
  },
  "activity_state": {
    "required": false,
    "string": "Activity State",
    "type": "selection"
  },
  "activity_user_id": {
    "required": false,
    "string": "Responsible User",
    "type": "many2one"
  },
  "activity_type_id": {
    "required": false,
    "string": "Next Activity Type",
    "type": "many2one"
  },
  "activity_type_icon": {
    "required": false,
    "string": "Activity Type Icon",
    "type": "char"
  },
  "activity_date_deadline": {
    "required": false,
    "string": "Next Activity Deadline",
    "type": "date"
  },
  "my_activity_date_deadline": {
    "required": false,
    "string": "My Activity Deadline",
    "type": "date"
  },
  "activity_summary": {
    "required": false,
    "string": "Next Activity Summary",
    "type": "char"
  },
  "activity_exception_decoration": {
    "required": false,
    "string": "Activity Exception Decoration",
    "type": "selection"
  },
  "activity_exception_icon": {
    "required": false,
    "string": "Icon",
    "type": "char"
  },
  "activity_calendar_event_id": {
    "required": false,
    "string": "Next Activity Calendar Event",
    "type": "many2one"
  },
  "access_url": {
    "required": false,
    "string": "Portal Access URL",
    "type": "char"
  },
  "access_token": {
    "required": false,
    "string": "Security Token",
    "type": "char"
  },
  "access_warning": {
    "required": false,
    "string": "Access warning",
    "type": "text"
  },
  "message_is_follower": {
    "required": false,
    "string": "Is Follower",
    "type": "boolean"
  },
  "message_follower_ids": {
    "required": false,
    "string": "Followers",
    "type": "one2many"
  },
  "message_partner_ids": {
    "required": false,
    "string": "Followers (Partners)",
    "type": "many2many"
  },
  "message_ids": {
    "required": false,
    "string": "Messages",
    "type": "one2many"
  },
  "has_message": {
    "required": false,
    "string": "Has Message",
    "type": "boolean"
  },
  "message_needaction": {
    "required": false,
    "string": "Action Needed",
    "type": "boolean"
  },
  "message_needaction_counter": {
    "required": false,
    "string": "Number of Actions",
    "type": "integer"
  },
  "message_has_error": {
    "required": false,
    "string": "Message Delivery error",
    "type": "boolean"
  },
  "message_has_error_counter": {
    "required": false,
    "string": "Number of errors",
    "type": "integer"
  },
  "message_attachment_count": {
    "required": false,
    "string": "Attachment Count",
    "type": "integer"
  },
  "rating_ids": {
    "required": false,
    "string": "Ratings",
    "type": "one2many"
  },
  "website_message_ids": {
    "required": false,
    "string": "Website Messages",
    "type": "one2many"
  },
  "message_has_sms_error": {
    "required": false,
    "string": "SMS Delivery error",
    "type": "boolean"
  },
  "message_main_attachment_id": {
    "required": false,
    "string": "Main Attachment",
    "type": "many2one"
  },
  "name": {
    "required": false,
    "string": "Number",
    "type": "char"
  },
  "name_placeholder": {
    "required": false,
    "string": "Name Placeholder",
    "type": "char"
  },
  "ref": {
    "required": false,
    "string": "Reference",
    "type": "char"
  },
  "date": {
    "required": true,
    "string": "Date",
    "type": "date"
  },
  "state": {
    "required": true,
    "string": "Status",
    "type": "selection"
  },
  "move_type": {
    "required": true,
    "string": "Type",
    "type": "selection"
  },
  "is_storno": {
    "required": false,
    "string": "Is Storno",
    "type": "boolean"
  },
  "journal_id": {
    "required": true,
    "string": "Journal",
    "type": "many2one"
  },
  "journal_group_id": {
    "required": false,
    "string": "Ledger",
    "type": "many2one"
  },
  "company_id": {
    "required": false,
    "string": "Company",
    "type": "many2one"
  },
  "line_ids": {
    "required": false,
    "string": "Journal Items",
    "type": "one2many"
  },
  "journal_line_ids": {
    "required": false,
    "string": "Journal Items (DEPRECATED)",
    "type": "one2many"
  },
  "exchange_diff_partial_ids": {
    "required": false,
    "string": "Related reconciliation",
    "type": "one2many"
  },
  "origin_payment_id": {
    "required": false,
    "string": "Payment",
    "type": "many2one"
  },
  "matched_payment_ids": {
    "required": false,
    "string": "Matched Payments",
    "type": "many2many"
  },
  "reconciled_payment_ids": {
    "required": false,
    "string": "Reconciled Payments",
    "type": "many2many"
  },
  "payment_count": {
    "required": false,
    "string": "Payment Count",
    "type": "integer"
  },
  "statement_line_id": {
    "required": false,
    "string": "Statement Line",
    "type": "many2one"
  },
  "statement_id": {
    "required": false,
    "string": "Statement",
    "type": "many2one"
  },
  "adjusting_entry_origin_move_ids": {
    "required": false,
    "string": "Adjusting Entry Origin Moves",
    "type": "many2many"
  },
  "adjusting_entry_origin_label": {
    "required": false,
    "string": "Adjusting Entry Origin Label",
    "type": "char"
  },
  "adjusting_entry_origin_moves_count": {
    "required": false,
    "string": "Adjusting Entry Origin Moves Count",
    "type": "integer"
  },
  "adjusting_entries_move_ids": {
    "required": false,
    "string": "Created Adjusting Entries",
    "type": "many2many"
  },
  "adjusting_entries_count": {
    "required": false,
    "string": "Adjusting Entries Count",
    "type": "integer"
  },
  "tax_cash_basis_rec_id": {
    "required": false,
    "string": "Tax Cash Basis Entry of",
    "type": "many2one"
  },
  "tax_cash_basis_origin_move_id": {
    "required": false,
    "string": "Cash Basis Origin",
    "type": "many2one"
  },
  "tax_cash_basis_created_move_ids": {
    "required": false,
    "string": "Cash Basis Entries",
    "type": "one2many"
  },
  "always_tax_exigible": {
    "required": false,
    "string": "Always Tax Exigible",
    "type": "boolean"
  },
  "auto_post": {
    "required": true,
    "string": "Auto-post",
    "type": "selection"
  },
  "auto_post_until": {
    "required": false,
    "string": "Auto-post until",
    "type": "date"
  },
  "auto_post_origin_id": {
    "required": false,
    "string": "First recurring entry",
    "type": "many2one"
  },
  "hide_post_button": {
    "required": false,
    "string": "Hide Post Button",
    "type": "boolean"
  },
  "checked": {
    "required": false,
    "string": "Reviewed",
    "type": "boolean"
  },
  "posted_before": {
    "required": false,
    "string": "Posted Before",
    "type": "boolean"
  },
  "suitable_journal_ids": {
    "required": false,
    "string": "Suitable Journal",
    "type": "many2many"
  },
  "highest_name": {
    "required": false,
    "string": "Highest Name",
    "type": "char"
  },
  "made_sequence_gap": {
    "required": false,
    "string": "Made Sequence Gap",
    "type": "boolean"
  },
  "show_name_warning": {
    "required": false,
    "string": "Show Name Warning",
    "type": "boolean"
  },
  "type_name": {
    "required": false,
    "string": "Type Name",
    "type": "char"
  },
  "country_code": {
    "required": false,
    "string": "Country Code",
    "type": "char"
  },
  "company_price_include": {
    "required": false,
    "string": "Default Sales Price Include",
    "type": "selection"
  },
  "attachment_ids": {
    "required": false,
    "string": "Attachments",
    "type": "one2many"
  },
  "audit_trail_message_ids": {
    "required": false,
    "string": "Audit Trail Messages",
    "type": "one2many"
  },
  "restrict_mode_hash_table": {
    "required": false,
    "string": "Secure Posted Entries with Hash",
    "type": "boolean"
  },
  "secure_sequence_number": {
    "required": false,
    "string": "Inalterability No Gap Sequence #",
    "type": "integer"
  },
  "inalterable_hash": {
    "required": false,
    "string": "Inalterability Hash",
    "type": "char"
  },
  "secured": {
    "required": false,
    "string": "Secured",
    "type": "boolean"
  },
  "invoice_line_ids": {
    "required": false,
    "string": "Invoice lines",
    "type": "one2many"
  },
  "invoice_date": {
    "required": false,
    "string": "Invoice/Bill Date",
    "type": "date"
  },
  "invoice_date_due": {
    "required": false,
    "string": "Due Date",
    "type": "date"
  },
  "delivery_date": {
    "required": false,
    "string": "Delivery Date",
    "type": "date"
  },
  "show_delivery_date": {
    "required": false,
    "string": "Show Delivery Date",
    "type": "boolean"
  },
  "invoice_payment_term_id": {
    "required": false,
    "string": "Payment Terms",
    "type": "many2one"
  },
  "needed_terms": {
    "required": false,
    "string": "Needed Terms",
    "type": "binary"
  },
  "needed_terms_dirty": {
    "required": false,
    "string": "Needed Terms Dirty",
    "type": "boolean"
  },
  "tax_calculation_rounding_method": {
    "required": false,
    "string": "Tax calculation rounding method",
    "type": "selection"
  },
  "partner_id": {
    "required": false,
    "string": "Partner",
    "type": "many2one"
  },
  "commercial_partner_id": {
    "required": false,
    "string": "Commercial Entity",
    "type": "many2one"
  },
  "partner_shipping_id": {
    "required": false,
    "string": "Delivery Address",
    "type": "many2one"
  },
  "partner_bank_id": {
    "required": false,
    "string": "Recipient Bank",
    "type": "many2one"
  },
  "fiscal_position_id": {
    "required": false,
    "string": "Fiscal Position",
    "type": "many2one"
  },
  "payment_reference": {
    "required": false,
    "string": "Payment Reference",
    "type": "char"
  },
  "display_qr_code": {
    "required": false,
    "string": "Display QR-code",
    "type": "boolean"
  },
  "display_link_qr_code": {
    "required": false,
    "string": "Display Link QR-code",
    "type": "boolean"
  },
  "qr_code_method": {
    "required": false,
    "string": "Payment QR-code",
    "type": "selection"
  },
  "invoice_outstanding_credits_debits_widget": {
    "required": false,
    "string": "Invoice Outstanding Credits Debits Widget",
    "type": "binary"
  },
  "invoice_has_outstanding": {
    "required": false,
    "string": "Invoice Has Outstanding",
    "type": "boolean"
  },
  "invoice_payments_widget": {
    "required": false,
    "string": "Invoice Payments Widget",
    "type": "binary"
  },
  "preferred_payment_method_line_id": {
    "required": false,
    "string": "Preferred Payment Method Line",
    "type": "many2one"
  },
  "company_currency_id": {
    "required": false,
    "string": "Company Currency",
    "type": "many2one"
  },
  "currency_id": {
    "required": true,
    "string": "Currency",
    "type": "many2one"
  },
  "expected_currency_rate": {
    "required": false,
    "string": "Expected Currency Rate",
    "type": "float"
  },
  "invoice_currency_rate": {
    "required": false,
    "string": "Currency Rate",
    "type": "float"
  },
  "direction_sign": {
    "required": false,
    "string": "Direction Sign",
    "type": "integer"
  },
  "amount_untaxed": {
    "required": false,
    "string": "Untaxed Amount",
    "type": "monetary"
  },
  "amount_tax": {
    "required": false,
    "string": "Tax",
    "type": "monetary"
  },
  "amount_total": {
    "required": false,
    "string": "Total",
    "type": "monetary"
  },
  "amount_residual": {
    "required": false,
    "string": "Amount Due",
    "type": "monetary"
  },
  "amount_untaxed_signed": {
    "required": false,
    "string": "Untaxed Amount Signed",
    "type": "monetary"
  },
  "amount_untaxed_in_currency_signed": {
    "required": false,
    "string": "Untaxed Amount Signed Currency",
    "type": "monetary"
  },
  "amount_tax_signed": {
    "required": false,
    "string": "Tax Signed",
    "type": "monetary"
  },
  "amount_total_signed": {
    "required": false,
    "string": "Total Signed",
    "type": "monetary"
  },
  "amount_total_in_currency_signed": {
    "required": false,
    "string": "Total in Currency Signed",
    "type": "monetary"
  },
  "amount_residual_signed": {
    "required": false,
    "string": "Amount Due Signed",
    "type": "monetary"
  },
  "tax_totals": {
    "required": false,
    "string": "Invoice Totals",
    "type": "binary"
  },
  "payment_state": {
    "required": false,
    "string": "Payment Status",
    "type": "selection"
  },
  "status_in_payment": {
    "required": false,
    "string": "Status In Payment",
    "type": "selection"
  },
  "amount_total_words": {
    "required": false,
    "string": "Amount total in words",
    "type": "char"
  },
  "reversed_entry_id": {
    "required": false,
    "string": "Reversal of",
    "type": "many2one"
  },
  "reversal_move_ids": {
    "required": false,
    "string": "Reversal Move",
    "type": "one2many"
  },
  "invoice_vendor_bill_id": {
    "required": false,
    "string": "Vendor Bill",
    "type": "many2one"
  },
  "invoice_source_email": {
    "required": false,
    "string": "Source Email",
    "type": "char"
  },
  "invoice_partner_display_name": {
    "required": false,
    "string": "Invoice Partner Display Name",
    "type": "char"
  },
  "is_manually_modified": {
    "required": false,
    "string": "Is Manually Modified",
    "type": "boolean"
  },
  "quick_edit_mode": {
    "required": false,
    "string": "Quick Edit Mode",
    "type": "boolean"
  },
  "quick_edit_total_amount": {
    "required": false,
    "string": "Total (Tax inc.)",
    "type": "monetary"
  },
  "quick_encoding_vals": {
    "required": false,
    "string": "Quick Encoding Vals",
    "type": "json"
  },
  "narration": {
    "required": false,
    "string": "Terms and Conditions",
    "type": "html"
  },
  "is_move_sent": {
    "required": false,
    "string": "Is Move Sent",
    "type": "boolean"
  },
  "is_being_sent": {
    "required": false,
    "string": "Is Being Sent",
    "type": "boolean"
  },
  "move_sent_values": {
    "required": false,
    "string": "Sent",
    "type": "selection"
  },
  "invoice_user_id": {
    "required": false,
    "string": "Salesperson",
    "type": "many2one"
  },
  "user_id": {
    "required": false,
    "string": "User",
    "type": "many2one"
  },
  "invoice_origin": {
    "required": false,
    "string": "Origin",
    "type": "char"
  },
  "invoice_incoterm_id": {
    "required": false,
    "string": "Incoterm",
    "type": "many2one"
  },
  "incoterm_location": {
    "required": false,
    "string": "Incoterm Location",
    "type": "char"
  },
  "invoice_cash_rounding_id": {
    "required": false,
    "string": "Cash Rounding Method",
    "type": "many2one"
  },
  "sending_data": {
    "required": false,
    "string": "Sending Data",
    "type": "json"
  },
  "invoice_pdf_report_id": {
    "required": false,
    "string": "PDF Attachment",
    "type": "many2one"
  },
  "invoice_pdf_report_file": {
    "required": false,
    "string": "PDF File",
    "type": "binary"
  },
  "invoice_incoterm_placeholder": {
    "required": false,
    "string": "Invoice Incoterm Placeholder",
    "type": "char"
  },
  "invoice_filter_type_domain": {
    "required": false,
    "string": "Invoice Filter Type Domain",
    "type": "char"
  },
  "bank_partner_id": {
    "required": false,
    "string": "Bank Partner",
    "type": "many2one"
  },
  "tax_lock_date_message": {
    "required": false,
    "string": "Tax Lock Date Message",
    "type": "char"
  },
  "display_inactive_currency_warning": {
    "required": false,
    "string": "Display Inactive Currency Warning",
    "type": "boolean"
  },
  "tax_country_id": {
    "required": false,
    "string": "Tax Country",
    "type": "many2one"
  },
  "tax_country_code": {
    "required": false,
    "string": "Tax Country Code",
    "type": "char"
  },
  "has_reconciled_entries": {
    "required": false,
    "string": "Has Reconciled Entries",
    "type": "boolean"
  },
  "show_reset_to_draft_button": {
    "required": false,
    "string": "Show Reset To Draft Button",
    "type": "boolean"
  },
  "partner_credit_warning": {
    "required": false,
    "string": "Partner Credit Warning",
    "type": "text"
  },
  "duplicated_ref_ids": {
    "required": false,
    "string": "Duplicated Ref",
    "type": "many2many"
  },
  "need_cancel_request": {
    "required": false,
    "string": "Need Cancel Request",
    "type": "boolean"
  },
  "show_update_fpos": {
    "required": false,
    "string": "Has Fiscal Position Changed",
    "type": "boolean"
  },
  "payment_term_details": {
    "required": false,
    "string": "Payment Term Details",
    "type": "binary"
  },
  "show_payment_term_details": {
    "required": false,
    "string": "Show Payment Term Details",
    "type": "boolean"
  },
  "show_discount_details": {
    "required": false,
    "string": "Show Discount Details",
    "type": "boolean"
  },
  "abnormal_amount_warning": {
    "required": false,
    "string": "Abnormal Amount Warning",
    "type": "text"
  },
  "abnormal_date_warning": {
    "required": false,
    "string": "Abnormal Date Warning",
    "type": "text"
  },
  "taxes_legal_notes": {
    "required": false,
    "string": "Taxes Legal Notes",
    "type": "html"
  },
  "next_payment_date": {
    "required": false,
    "string": "Next Payment Date",
    "type": "date"
  },
  "display_send_button": {
    "required": false,
    "string": "Display Send Button",
    "type": "boolean"
  },
  "highlight_send_button": {
    "required": false,
    "string": "Highlight Send Button",
    "type": "boolean"
  },
  "create_uid": {
    "required": false,
    "string": "Created by",
    "type": "many2one"
  },
  "create_date": {
    "required": false,
    "string": "Created on",
    "type": "datetime"
  },
  "write_uid": {
    "required": false,
    "string": "Last Updated by",
    "type": "many2one"
  },
  "write_date": {
    "required": false,
    "string": "Last Updated on",
    "type": "datetime"
  },
  "payment_ids": {
    "required": false,
    "string": "Payments",
    "type": "one2many"
  },
  "statement_line_ids": {
    "required": false,
    "string": "Statements",
    "type": "one2many"
  },
  "payment_state_before_switch": {
    "required": false,
    "string": "Payment State Before Switch",
    "type": "char"
  },
  "deferred_move_ids": {
    "required": false,
    "string": "Deferred Entries",
    "type": "many2many"
  },
  "deferred_original_move_ids": {
    "required": false,
    "string": "Original Invoices",
    "type": "many2many"
  },
  "deferred_entry_type": {
    "required": false,
    "string": "Deferred Entry Type",
    "type": "selection"
  },
  "signing_user": {
    "required": false,
    "string": "Signer",
    "type": "many2one"
  },
  "show_signature_area": {
    "required": false,
    "string": "Show Signature Area",
    "type": "boolean"
  },
  "signature": {
    "required": false,
    "string": "Signature",
    "type": "binary"
  },
  "debit_origin_id": {
    "required": false,
    "string": "Original Invoice Debited",
    "type": "many2one"
  },
  "debit_note_ids": {
    "required": false,
    "string": "Debit Notes",
    "type": "one2many"
  },
  "debit_note_count": {
    "required": false,
    "string": "Number of Debit Notes",
    "type": "integer"
  },
  "ubl_cii_xml_id": {
    "required": false,
    "string": "Attachment",
    "type": "many2one"
  },
  "ubl_cii_xml_file": {
    "required": false,
    "string": "UBL/CII File",
    "type": "binary"
  },
  "transaction_ids": {
    "required": false,
    "string": "Transactions",
    "type": "many2many"
  },
  "authorized_transaction_ids": {
    "required": false,
    "string": "Authorized Transactions",
    "type": "many2many"
  },
  "transaction_count": {
    "required": false,
    "string": "Transaction Count",
    "type": "integer"
  },
  "amount_paid": {
    "required": false,
    "string": "Amount paid",
    "type": "monetary"
  },
  "stock_move_id": {
    "required": false,
    "string": "Stock Move",
    "type": "many2one"
  },
  "stock_valuation_layer_ids": {
    "required": false,
    "string": "Stock Valuation Layer",
    "type": "one2many"
  },
  "transfer_model_id": {
    "required": false,
    "string": "Originating Model",
    "type": "many2one"
  },
  "closing_return_id": {
    "required": false,
    "string": "Closing Return",
    "type": "many2one"
  },
  "l10n_in_gst_treatment": {
    "required": false,
    "string": "GST Treatment",
    "type": "selection"
  },
  "l10n_in_state_id": {
    "required": false,
    "string": "Place of supply",
    "type": "many2one"
  },
  "l10n_in_gstin": {
    "required": false,
    "string": "GSTIN",
    "type": "char"
  },
  "l10n_in_shipping_bill_number": {
    "required": false,
    "string": "Shipping bill number",
    "type": "char"
  },
  "l10n_in_shipping_bill_date": {
    "required": false,
    "string": "Shipping bill date",
    "type": "date"
  },
  "l10n_in_shipping_port_code_id": {
    "required": false,
    "string": "Port code",
    "type": "many2one"
  },
  "l10n_in_reseller_partner_id": {
    "required": false,
    "string": "Reseller",
    "type": "many2one"
  },
  "l10n_in_journal_type": {
    "required": false,
    "string": "Journal Type",
    "type": "selection"
  },
  "l10n_in_warning": {
    "required": false,
    "string": "L10N In Warning",
    "type": "json"
  },
  "l10n_in_is_gst_registered_enabled": {
    "required": false,
    "string": "Registered Under GST",
    "type": "boolean"
  },
  "l10n_in_is_withholding": {
    "required": false,
    "string": "Is Indian TDS Entry",
    "type": "boolean"
  },
  "l10n_in_withholding_ref_move_id": {
    "required": false,
    "string": "Indian TDS Ref Move",
    "type": "many2one"
  },
  "l10n_in_withholding_ref_payment_id": {
    "required": false,
    "string": "Indian TDS Ref Payment",
    "type": "many2one"
  },
  "l10n_in_withhold_move_ids": {
    "required": false,
    "string": "Indian TDS Entries",
    "type": "one2many"
  },
  "l10n_in_withholding_line_ids": {
    "required": false,
    "string": "Indian TDS Lines",
    "type": "one2many"
  },
  "l10n_in_total_withholding_amount": {
    "required": false,
    "string": "Total Indian TDS Amount",
    "type": "monetary"
  },
  "l10n_in_display_higher_tcs_button": {
    "required": false,
    "string": "Display higher TCS button",
    "type": "boolean"
  },
  "l10n_in_tds_feature_enabled": {
    "required": false,
    "string": "TDS",
    "type": "boolean"
  },
  "l10n_in_tcs_feature_enabled": {
    "required": false,
    "string": "TCS",
    "type": "boolean"
  },
  "l10n_in_partner_gstin_status": {
    "required": false,
    "string": "GST Status",
    "type": "boolean"
  },
  "l10n_in_show_gstin_status": {
    "required": false,
    "string": "L10N In Show Gstin Status",
    "type": "boolean"
  },
  "l10n_in_gstin_verified_date": {
    "required": false,
    "string": "L10N In Gstin Verified Date",
    "type": "date"
  },
  "team_id": {
    "required": false,
    "string": "Sales Team",
    "type": "many2one"
  },
  "sale_order_count": {
    "required": false,
    "string": "Sale Order Count",
    "type": "integer"
  },
  "sale_warning_text": {
    "required": false,
    "string": "Sale Warning",
    "type": "text"
  },
  "extract_state": {
    "required": false,
    "string": "Extract state",
    "type": "selection"
  },
  "extract_status": {
    "required": false,
    "string": "Extract status",
    "type": "char"
  },
  "extract_error_message": {
    "required": false,
    "string": "Error message",
    "type": "text"
  },
  "extract_document_uuid": {
    "required": false,
    "string": "ID of the request to IAP-OCR",
    "type": "char"
  },
  "extract_can_show_send_button": {
    "required": false,
    "string": "Can show the ocr send button",
    "type": "boolean"
  },
  "is_in_extractable_state": {
    "required": false,
    "string": "Is In Extractable State",
    "type": "boolean"
  },
  "extract_state_processed": {
    "required": false,
    "string": "Extract State Processed",
    "type": "boolean"
  },
  "extract_attachment_id": {
    "required": false,
    "string": "Extract Attachment",
    "type": "many2one"
  },
  "extracted_word_ids": {
    "required": false,
    "string": "Extracted Words",
    "type": "one2many"
  },
  "extract_prefill_data": {
    "required": false,
    "string": "Extract Prefill Data",
    "type": "json"
  },
  "extract_can_show_banners": {
    "required": false,
    "string": "Can show the ocr banners",
    "type": "boolean"
  },
  "extract_detected_layout": {
    "required": false,
    "string": "Extract Detected Layout Id",
    "type": "integer"
  },
  "extract_partner_name": {
    "required": false,
    "string": "Extract Detected Partner Name",
    "type": "char"
  },
  "website_id": {
    "required": false,
    "string": "Website",
    "type": "many2one"
  }
}
```

## GET `/invoices`

Status: 200

```json
{
  "success": true,
  "count": 3,
  "invoices": [
    {
      "id": 5,
      "name": "INV/25-26/0003",
      "move_type": "out_invoice",
      "invoice_date": "2026-01-05",
      "invoice_date_due": "2026-01-05",
      "invoice_payment_term_id": [
        1,
        "Immediate Payment"
      ],
      "partner_id": [
        8,
        "Rishabh Tech, Rishabh"
      ],
      "invoice_origin": "S00003",
      "invoice_user_id": [
        2,
        "Rishabh Choudhary"
      ],
      "state": "posted",
      "amount_total": 114.99,
      "amount_residual": 0,
      "currency_id": [
        1,
        "USD"
      ],
      "invoice_line_ids": [
        10,
        11
      ]
    },
    {
      "id": 2,
      "name": "INV/25-26/0002",
      "move_type": "out_invoice",
      "invoice_date": "2026-01-05",
      "invoice_date_due": "2026-01-05",
      "invoice_payment_term_id": [
        1,
        "Immediate Payment"
      ],
      "partner_id": [
        3,
        "Rishabh Choudhary, Rishabh Choudhary"
      ],
      "invoice_origin": "S00001",
      "invoice_user_id": [
        2,
        "Rishabh Choudhary"
      ],
      "state": "posted",
      "amount_total": 29.99,
      "amount_residual": 0,
      "currency_id": [
        1,
        "USD"
      ],
      "invoice_line_ids": [
        4
      ]
    },
    {
      "id": 1,
      "name": "INV/25-26/0001",
      "move_type": "out_invoice",
      "invoice_date": "2025-12-24",
      "invoice_date_due": "2025-12-24",
      "invoice_payment_term_id": false,
      "partner_id": [
        3,
        "Rishabh Choudhary, Rishabh Choudhary"
      ],
      "invoice_origin": false,
      "invoice_user_id": [
        2,
        "Rishabh Choudhary"
      ],
      "state": "posted",
      "amount_total": 5502.75,
      "amount_residual": 5502.75,
      "currency_id": [
        1,
        "USD"
      ],
      "invoice_line_ids": [
        1
      ]
    }
  ]
}
```

## GET `/invoices?type=all`

Status: 200

```json
{
  "success": true,
  "count": 5,
  "invoices": [
    {
      "id": 4,
      "name": "PBNK1/25-26/0002",
      "move_type": "entry",
      "invoice_date": false,
      "invoice_date_due": "2026-01-05",
      "invoice_payment_term_id": false,
      "partner_id": [
        8,
        "Rishabh Tech, Rishabh"
      ],
      "invoice_origin": false,
      "invoice_user_id": false,
      "state": "posted",
      "amount_total": 114.99,
      "amount_residual": 0,
      "currency_id": [
        1,
        "USD"
      ],
      "invoice_line_ids": [
        8,
        9
      ]
    },
    {
      "id": 3,
      "name": "PBNK1/25-26/0001",
      "move_type": "entry",
      "invoice_date": false,
      "invoice_date_due": "2026-01-05",
      "invoice_payment_term_id": false,
      "partner_id": [
        3,
        "Rishabh Choudhary, Rishabh Choudhary"
      ],
      "invoice_origin": false,
      "invoice_user_id": false,
      "state": "posted",
      "amount_total": 29.99,
      "amount_residual": 0,
      "currency_id": [
        1,
        "USD"
      ],
      "invoice_line_ids": [
        6,
        7
      ]
    },
    {
      "id": 5,
      "name": "INV/25-26/0003",
      "move_type": "out_invoice",
      "invoice_date": "2026-01-05",
      "invoice_date_due": "2026-01-05",
      "invoice_payment_term_id": [
        1,
        "Immediate Payment"
      ],
      "partner_id": [
        8,
        "Rishabh Tech, Rishabh"
      ],
      "invoice_origin": "S00003",
      "invoice_user_id": [
        2,
        "Rishabh Choudhary"
      ],
      "state": "posted",
      "amount_total": 114.99,
      "amount_residual": 0,
      "currency_id": [
        1,
        "USD"
      ],
      "invoice_line_ids": [
        10,
        11
      ]
    },
    {
      "id": 2,
      "name": "INV/25-26/0002",
      "move_type": "out_invoice",
      "invoice_date": "2026-01-05",
      "invoice_date_due": "2026-01-05",
      "invoice_payment_term_id": [
        1,
        "Immediate Payment"
      ],
      "partner_id": [
        3,
        "Rishabh Choudhary, Rishabh Choudhary"
      ],
      "invoice_origin": "S00001",
      "invoice_user_id": [
        2,
        "Rishabh Choudhary"
      ],
      "state": "posted",
      "amount_total": 29.99,
      "amount_residual": 0,
      "currency_id": [
        1,
        "USD"
      ],
      "invoice_line_ids": [
        4
      ]
    },
    {
      "id": 1,
      "name": "INV/25-26/0001",
      "move_type": "out_invoice",
      "invoice_date": "2025-12-24",
      "invoice_date_due": "2025-12-24",
      "invoice_payment_term_id": false,
      "partner_id": [
        3,
        "Rishabh Choudhary, Rishabh Choudhary"
      ],
      "invoice_origin": false,
      "invoice_user_id": [
        2,
        "Rishabh Choudhary"
      ],
      "state": "posted",
      "amount_total": 5502.75,
      "amount_residual": 5502.75,
      "currency_id": [
        1,
        "USD"
      ],
      "invoice_line_ids": [
        1
      ]
    }
  ]
}
```

## GET `/invoices/5`

Status: 200

```json
{
  "success": true,
  "invoice": {
    "id": 5,
    "name": "INV/25-26/0003",
    "move_type": "out_invoice",
    "invoice_date": "2026-01-05",
    "invoice_date_due": "2026-01-05",
    "invoice_payment_term_id": [
      1,
      "Immediate Payment"
    ],
    "partner_id": [
      8,
      "Rishabh Tech, Rishabh"
    ],
    "invoice_origin": "S00003",
    "invoice_user_id": [
      2,
      "Rishabh Choudhary"
    ],
    "state": "posted",
    "amount_total": 114.99,
    "amount_residual": 0,
    "currency_id": [
      1,
      "USD"
    ],
    "invoice_line_ids": [
      10,
      11
    ]
  }
}
```

## GET `/inventory/quants`

Status: 200

```json
{
  "success": true,
  "count": 0,
  "quants": []
}
```

## GET `/inventory/locations`

Status: 200

```json
{
  "success": true,
  "count": 10,
  "locations": [
    {
      "id": 2,
      "name": "Partners",
      "complete_name": "Partners",
      "usage": "view",
      "location_id": false,
      "company_id": false
    },
    {
      "id": 5,
      "name": "Customers",
      "complete_name": "Partners/Customers",
      "usage": "customer",
      "location_id": [
        2,
        "Partners"
      ],
      "company_id": false
    },
    {
      "id": 4,
      "name": "Vendors",
      "complete_name": "Partners/Vendors",
      "usage": "supplier",
      "location_id": [
        2,
        "Partners"
      ],
      "company_id": false
    },
    {
      "id": 1,
      "name": "Physical Locations",
      "complete_name": "Physical Locations",
      "usage": "view",
      "location_id": false,
      "company_id": false
    },
    {
      "id": 3,
      "name": "Virtual Locations",
      "complete_name": "Virtual Locations",
      "usage": "view",
      "location_id": false,
      "company_id": false
    },
    {
      "id": 14,
      "name": "Inventory adjustment",
      "complete_name": "Virtual Locations/Inventory adjustment",
      "usage": "inventory",
      "location_id": [
        3,
        "Virtual Locations"
      ],
      "company_id": [
        1,
        "Point 2 Point Communications-v2"
      ]
    },
    {
      "id": 15,
      "name": "Production",
      "complete_name": "Virtual Locations/Production",
      "usage": "production",
      "location_id": [
        3,
        "Virtual Locations"
      ],
      "company_id": [
        1,
        "Point 2 Point Communications-v2"
      ]
    },
    {
      "id": 16,
      "name": "Scrap",
      "complete_name": "Virtual Locations/Scrap",
      "usage": "inventory",
      "location_id": [
        3,
        "Virtual Locations"
      ],
      "company_id": [
        1,
        "Point 2 Point Communications-v2"
      ]
    },
    {
      "id": 7,
      "name": "WH",
      "complete_name": "WH",
      "usage": "view",
      "location_id": [
        1,
        "Physical Locations"
      ],
      "company_id": [
        1,
        "Point 2 Point Communications-v2"
      ]
    },
    {
      "id": 8,
      "name": "Stock",
      "complete_name": "WH/Stock",
      "usage": "internal",
      "location_id": [
        7,
        "WH"
      ],
      "company_id": [
        1,
        "Point 2 Point Communications-v2"
      ]
    }
  ]
}
```

## GET `/crm/leads/fields`

Status: 200

```json
{
  "id": {
    "required": false,
    "string": "ID",
    "type": "integer"
  },
  "display_name": {
    "required": false,
    "string": "Display Name",
    "type": "char"
  },
  "duration_tracking": {
    "required": false,
    "string": "Status time",
    "type": "json"
  },
  "campaign_id": {
    "required": false,
    "string": "Campaign",
    "type": "many2one"
  },
  "source_id": {
    "required": false,
    "string": "Source",
    "type": "many2one"
  },
  "medium_id": {
    "required": false,
    "string": "Medium",
    "type": "many2one"
  },
  "activity_ids": {
    "required": false,
    "string": "Activities",
    "type": "one2many"
  },
  "activity_state": {
    "required": false,
    "string": "Activity State",
    "type": "selection"
  },
  "activity_user_id": {
    "required": false,
    "string": "Responsible User",
    "type": "many2one"
  },
  "activity_type_id": {
    "required": false,
    "string": "Next Activity Type",
    "type": "many2one"
  },
  "activity_type_icon": {
    "required": false,
    "string": "Activity Type Icon",
    "type": "char"
  },
  "activity_date_deadline": {
    "required": false,
    "string": "Next Activity Deadline",
    "type": "date"
  },
  "my_activity_date_deadline": {
    "required": false,
    "string": "My Activity Deadline",
    "type": "date"
  },
  "activity_summary": {
    "required": false,
    "string": "Next Activity Summary",
    "type": "char"
  },
  "activity_exception_decoration": {
    "required": false,
    "string": "Activity Exception Decoration",
    "type": "selection"
  },
  "activity_exception_icon": {
    "required": false,
    "string": "Icon",
    "type": "char"
  },
  "activity_calendar_event_id": {
    "required": false,
    "string": "Next Activity Calendar Event",
    "type": "many2one"
  },
  "message_is_follower": {
    "required": false,
    "string": "Is Follower",
    "type": "boolean"
  },
  "message_follower_ids": {
    "required": false,
    "string": "Followers",
    "type": "one2many"
  },
  "message_partner_ids": {
    "required": false,
    "string": "Followers (Partners)",
    "type": "many2many"
  },
  "message_ids": {
    "required": false,
    "string": "Messages",
    "type": "one2many"
  },
  "has_message": {
    "required": false,
    "string": "Has Message",
    "type": "boolean"
  },
  "message_needaction": {
    "required": false,
    "string": "Action Needed",
    "type": "boolean"
  },
  "message_needaction_counter": {
    "required": false,
    "string": "Number of Actions",
    "type": "integer"
  },
  "message_has_error": {
    "required": false,
    "string": "Message Delivery error",
    "type": "boolean"
  },
  "message_has_error_counter": {
    "required": false,
    "string": "Number of errors",
    "type": "integer"
  },
  "message_attachment_count": {
    "required": false,
    "string": "Attachment Count",
    "type": "integer"
  },
  "rating_ids": {
    "required": false,
    "string": "Ratings",
    "type": "one2many"
  },
  "website_message_ids": {
    "required": false,
    "string": "Website Messages",
    "type": "one2many"
  },
  "message_has_sms_error": {
    "required": false,
    "string": "SMS Delivery error",
    "type": "boolean"
  },
  "phone_sanitized": {
    "required": false,
    "string": "Sanitized Number",
    "type": "char"
  },
  "phone_sanitized_blacklisted": {
    "required": false,
    "string": "Phone Blacklisted",
    "type": "boolean"
  },
  "phone_blacklisted": {
    "required": false,
    "string": "Blacklisted Phone is Phone",
    "type": "boolean"
  },
  "phone_mobile_search": {
    "required": false,
    "string": "Phone Number",
    "type": "char"
  },
  "email_normalized": {
    "required": false,
    "string": "Normalized Email",
    "type": "char"
  },
  "is_blacklisted": {
    "required": false,
    "string": "Blacklist",
    "type": "boolean"
  },
  "message_bounce": {
    "required": false,
    "string": "Bounce",
    "type": "integer"
  },
  "email_cc": {
    "required": false,
    "string": "Email cc",
    "type": "char"
  },
  "name": {
    "required": true,
    "string": "Opportunity",
    "type": "char"
  },
  "user_id": {
    "required": false,
    "string": "Salesperson",
    "type": "many2one"
  },
  "user_company_ids": {
    "required": false,
    "string": "User Company",
    "type": "many2many"
  },
  "team_id": {
    "required": false,
    "string": "Sales Team",
    "type": "many2one"
  },
  "lead_properties": {
    "required": false,
    "string": "Properties",
    "type": "properties"
  },
  "company_id": {
    "required": false,
    "string": "Company",
    "type": "many2one"
  },
  "referred": {
    "required": false,
    "string": "Referred By",
    "type": "char"
  },
  "description": {
    "required": false,
    "string": "Notes",
    "type": "html"
  },
  "active": {
    "required": false,
    "string": "Active",
    "type": "boolean"
  },
  "type": {
    "required": true,
    "string": "Type",
    "type": "selection"
  },
  "priority": {
    "required": false,
    "string": "Priority",
    "type": "selection"
  },
  "stage_id": {
    "required": false,
    "string": "Stage",
    "type": "many2one"
  },
  "tag_ids": {
    "required": false,
    "string": "Tags",
    "type": "many2many"
  },
  "color": {
    "required": false,
    "string": "Color Index",
    "type": "integer"
  },
  "expected_revenue": {
    "required": false,
    "string": "Expected Revenue",
    "type": "monetary"
  },
  "prorated_revenue": {
    "required": false,
    "string": "Prorated Revenue",
    "type": "monetary"
  },
  "recurring_revenue": {
    "required": false,
    "string": "Recurring Revenues",
    "type": "monetary"
  },
  "recurring_plan": {
    "required": false,
    "string": "Recurring Plan",
    "type": "many2one"
  },
  "recurring_revenue_monthly": {
    "required": false,
    "string": "Expected MRR",
    "type": "monetary"
  },
  "recurring_revenue_monthly_prorated": {
    "required": false,
    "string": "Prorated MRR",
    "type": "monetary"
  },
  "recurring_revenue_prorated": {
    "required": false,
    "string": "Prorated Recurring Revenues",
    "type": "monetary"
  },
  "company_currency": {
    "required": false,
    "string": "Currency",
    "type": "many2one"
  },
  "date_closed": {
    "required": false,
    "string": "Closed Date",
    "type": "datetime"
  },
  "date_automation_last": {
    "required": false,
    "string": "Last Action",
    "type": "datetime"
  },
  "date_open": {
    "required": false,
    "string": "Assignment Date",
    "type": "datetime"
  },
  "day_open": {
    "required": false,
    "string": "Days to Assign",
    "type": "float"
  },
  "day_close": {
    "required": false,
    "string": "Days to Close",
    "type": "float"
  },
  "date_last_stage_update": {
    "required": false,
    "string": "Last Stage Update",
    "type": "datetime"
  },
  "date_conversion": {
    "required": false,
    "string": "Conversion Date",
    "type": "datetime"
  },
  "date_deadline": {
    "required": false,
    "string": "Expected Closing",
    "type": "date"
  },
  "commercial_partner_id": {
    "required": false,
    "string": "Customer Company",
    "type": "many2one"
  },
  "partner_id": {
    "required": false,
    "string": "Customer",
    "type": "many2one"
  },
  "partner_is_blacklisted": {
    "required": false,
    "string": "Partner is blacklisted",
    "type": "boolean"
  },
  "contact_name": {
    "required": false,
    "string": "Contact Name",
    "type": "char"
  },
  "partner_name": {
    "required": false,
    "string": "Company Name",
    "type": "char"
  },
  "function": {
    "required": false,
    "string": "Job Position",
    "type": "char"
  },
  "email_from": {
    "required": false,
    "string": "Email",
    "type": "char"
  },
  "email_domain_criterion": {
    "required": false,
    "string": "Email Domain Criterion",
    "type": "char"
  },
  "phone": {
    "required": false,
    "string": "Phone",
    "type": "char"
  },
  "phone_state": {
    "required": false,
    "string": "Phone Quality",
    "type": "selection"
  },
  "email_state": {
    "required": false,
    "string": "Email Quality",
    "type": "selection"
  },
  "website": {
    "required": false,
    "string": "Website",
    "type": "char"
  },
  "lang_id": {
    "required": false,
    "string": "Language",
    "type": "many2one"
  },
  "lang_code": {
    "required": false,
    "string": "Locale Code",
    "type": "char"
  },
  "lang_active_count": {
    "required": false,
    "string": "Lang Active Count",
    "type": "integer"
  },
  "street": {
    "required": false,
    "string": "Street",
    "type": "char"
  },
  "street2": {
    "required": false,
    "string": "Street2",
    "type": "char"
  },
  "zip": {
    "required": false,
    "string": "Zip",
    "type": "char"
  },
  "city": {
    "required": false,
    "string": "City",
    "type": "char"
  },
  "state_id": {
    "required": false,
    "string": "State",
    "type": "many2one"
  },
  "country_id": {
    "required": false,
    "string": "Country",
    "type": "many2one"
  },
  "probability": {
    "required": false,
    "string": "Probability",
    "type": "float"
  },
  "automated_probability": {
    "required": false,
    "string": "Automated Probability",
    "type": "float"
  },
  "is_automated_probability": {
    "required": false,
    "string": "Is automated probability?",
    "type": "boolean"
  },
  "won_status": {
    "required": false,
    "string": "Won/Lost",
    "type": "selection"
  },
  "lost_reason_id": {
    "required": false,
    "string": "Lost Reason",
    "type": "many2one"
  },
  "calendar_event_ids": {
    "required": false,
    "string": "Meetings",
    "type": "one2many"
  },
  "duplicate_lead_ids": {
    "required": false,
    "string": "Potential Duplicate Lead",
    "type": "many2many"
  },
  "duplicate_lead_count": {
    "required": false,
    "string": "Potential Duplicate Lead Count",
    "type": "integer"
  },
  "meeting_display_date": {
    "required": false,
    "string": "Meeting Display Date",
    "type": "date"
  },
  "meeting_display_label": {
    "required": false,
    "string": "Meeting Display Label",
    "type": "char"
  },
  "partner_email_update": {
    "required": false,
    "string": "Partner Email will Update",
    "type": "boolean"
  },
  "partner_phone_update": {
    "required": false,
    "string": "Partner Phone will Update",
    "type": "boolean"
  },
  "is_partner_visible": {
    "required": false,
    "string": "Is Partner Visible",
    "type": "boolean"
  },
  "create_uid": {
    "required": false,
    "string": "Created by",
    "type": "many2one"
  },
  "create_date": {
    "required": false,
    "string": "Created on",
    "type": "datetime"
  },
  "write_uid": {
    "required": false,
    "string": "Last Updated by",
    "type": "many2one"
  },
  "write_date": {
    "required": false,
    "string": "Last Updated on",
    "type": "datetime"
  },
  "days_to_convert": {
    "required": false,
    "string": "Days To Convert",
    "type": "float"
  },
  "days_exceeding_closing": {
    "required": false,
    "string": "Exceeded Closing Days",
    "type": "float"
  },
  "origin_channel_id": {
    "required": false,
    "string": "Live chat from which the lead was created",
    "type": "many2one"
  },
  "reveal_id": {
    "required": false,
    "string": "Reveal ID",
    "type": "char"
  },
  "visitor_ids": {
    "required": false,
    "string": "Web Visitors",
    "type": "many2many"
  },
  "visitor_page_count": {
    "required": false,
    "string": "# Page Views",
    "type": "integer"
  },
  "iap_enrich_done": {
    "required": false,
    "string": "Enrichment done",
    "type": "boolean"
  },
  "show_enrich_button": {
    "required": false,
    "string": "Allow manual enrich",
    "type": "boolean"
  },
  "lead_mining_request_id": {
    "required": false,
    "string": "Lead Mining Request",
    "type": "many2one"
  },
  "visitor_sessions_count": {
    "required": false,
    "string": "# Sessions",
    "type": "integer"
  },
  "sale_amount_total": {
    "required": false,
    "string": "Sum of Orders",
    "type": "monetary"
  },
  "quotation_count": {
    "required": false,
    "string": "Number of Quotations",
    "type": "integer"
  },
  "sale_order_count": {
    "required": false,
    "string": "Number of Sale Orders",
    "type": "integer"
  },
  "order_ids": {
    "required": false,
    "string": "Orders",
    "type": "one2many"
  }
}
```

## GET `/crm/leads`

Status: 400

```json
{
  "error": {
    "code": 0,
    "message": "Odoo Server Error",
    "data": {
      "name": "builtins.ValueError",
      "message": "Invalid field 'mobile' on 'crm.lead'",
      "arguments": [
        "Invalid field 'mobile' on 'crm.lead'"
      ],
      "context": {},
      "debug": "Traceback (most recent call last):\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/orm/models.py\", line 3519, in _determine_fields_to_fetch\n    field = self._fields[field_name]\n            ~~~~~~~~~~~~^^^^^^^^^^^^\nKeyError: 'mobile'\n\nThe above exception was the direct cause of the following exception:\n\nTraceback (most recent call last):\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/http.py\", line 2255, in _transactioning\n    return service_model.retrying(func, env=self.env)\n           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/service/model.py\", line 176, in retrying\n    result = func()\n             ^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/http.py\", line 2222, in _serve_ir_http\n    response = self.dispatcher.dispatch(rule.endpoint, args)\n               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/http.py\", line 2484, in dispatch\n    result = self.request.registry['ir.http']._dispatch(endpoint)\n             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/addons/base/models/ir_http.py\", line 352, in _dispatch\n    result = endpoint(**request.params)\n             ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/http.py\", line 773, in route_wrapper\n    result = endpoint(self, *args, **params_ok)\n             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/custom/trial/saas_trial/controllers/main.py\", line 474, in jsonrpc\n    res = super().jsonrpc(service, method, args)\n          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/http.py\", line 773, in route_wrapper\n    result = endpoint(self, *args, **params_ok)\n             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/addons/rpc/controllers.py\", line 177, in jsonrpc\n    return dispatch_rpc(service, method, args)\n           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/http.py\", line 424, in dispatch_rpc\n    return dispatch(method, params)\n           ^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/service/model.py\", line 108, in dispatch\n    res = execute_kw(db, uid, model, method_, *args)\n          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/service/model.py\", line 136, in execute_kw\n    return execute(db, uid, obj, method, *args, **kw or {})\n           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/service/model.py\", line 142, in execute\n    res = execute_cr(cr, uid, obj, method, *args, **kw)\n          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/service/model.py\", line 127, in execute_cr\n    result = retrying(partial(call_kw, recs, method, args, kw), env)\n             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/service/model.py\", line 176, in retrying\n    result = func()\n             ^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/service/model.py\", line 84, in call_kw\n    result = method(recs, *args, **kwargs)\n             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/orm/models.py\", line 5477, in search_read\n    records = self.search_fetch(domain or [], fields, offset=offset, limit=limit, order=order)\n              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/addons/crm/models/crm_lead.py\", line 911, in search_fetch\n    return super().search_fetch(domain, field_names, offset, limit, order)\n           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/orm/models.py\", line 1408, in search_fetch\n    fields_to_fetch = self._determine_fields_to_fetch(field_names)\n                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/orm/models.py\", line 3521, in _determine_fields_to_fetch\n    raise ValueError(f\"Invalid field {field_name!r} on {self._name!r}\") from e\nValueError: Invalid field 'mobile' on 'crm.lead'\n"
    }
  }
}
```

## GET `/pickings/fields`

Status: 200

```json
{
  "id": {
    "required": false,
    "string": "ID",
    "type": "integer"
  },
  "display_name": {
    "required": false,
    "string": "Display Name",
    "type": "char"
  },
  "activity_ids": {
    "required": false,
    "string": "Activities",
    "type": "one2many"
  },
  "activity_state": {
    "required": false,
    "string": "Activity State",
    "type": "selection"
  },
  "activity_user_id": {
    "required": false,
    "string": "Responsible User",
    "type": "many2one"
  },
  "activity_type_id": {
    "required": false,
    "string": "Next Activity Type",
    "type": "many2one"
  },
  "activity_type_icon": {
    "required": false,
    "string": "Activity Type Icon",
    "type": "char"
  },
  "activity_date_deadline": {
    "required": false,
    "string": "Next Activity Deadline",
    "type": "date"
  },
  "my_activity_date_deadline": {
    "required": false,
    "string": "My Activity Deadline",
    "type": "date"
  },
  "activity_summary": {
    "required": false,
    "string": "Next Activity Summary",
    "type": "char"
  },
  "activity_exception_decoration": {
    "required": false,
    "string": "Activity Exception Decoration",
    "type": "selection"
  },
  "activity_exception_icon": {
    "required": false,
    "string": "Icon",
    "type": "char"
  },
  "activity_calendar_event_id": {
    "required": false,
    "string": "Next Activity Calendar Event",
    "type": "many2one"
  },
  "message_is_follower": {
    "required": false,
    "string": "Is Follower",
    "type": "boolean"
  },
  "message_follower_ids": {
    "required": false,
    "string": "Followers",
    "type": "one2many"
  },
  "message_partner_ids": {
    "required": false,
    "string": "Followers (Partners)",
    "type": "many2many"
  },
  "message_ids": {
    "required": false,
    "string": "Messages",
    "type": "one2many"
  },
  "has_message": {
    "required": false,
    "string": "Has Message",
    "type": "boolean"
  },
  "message_needaction": {
    "required": false,
    "string": "Action Needed",
    "type": "boolean"
  },
  "message_needaction_counter": {
    "required": false,
    "string": "Number of Actions",
    "type": "integer"
  },
  "message_has_error": {
    "required": false,
    "string": "Message Delivery error",
    "type": "boolean"
  },
  "message_has_error_counter": {
    "required": false,
    "string": "Number of errors",
    "type": "integer"
  },
  "message_attachment_count": {
    "required": false,
    "string": "Attachment Count",
    "type": "integer"
  },
  "rating_ids": {
    "required": false,
    "string": "Ratings",
    "type": "one2many"
  },
  "website_message_ids": {
    "required": false,
    "string": "Website Messages",
    "type": "one2many"
  },
  "message_has_sms_error": {
    "required": false,
    "string": "SMS Delivery error",
    "type": "boolean"
  },
  "name": {
    "required": false,
    "string": "Reference",
    "type": "char"
  },
  "origin": {
    "required": false,
    "string": "Source Document",
    "type": "char"
  },
  "note": {
    "required": false,
    "string": "Notes",
    "type": "html"
  },
  "backorder_id": {
    "required": false,
    "string": "Back Order of",
    "type": "many2one"
  },
  "backorder_ids": {
    "required": false,
    "string": "Back Orders",
    "type": "one2many"
  },
  "return_id": {
    "required": false,
    "string": "Return of",
    "type": "many2one"
  },
  "return_ids": {
    "required": false,
    "string": "Returns",
    "type": "one2many"
  },
  "return_count": {
    "required": false,
    "string": "# Returns",
    "type": "integer"
  },
  "move_type": {
    "required": true,
    "string": "Shipping Policy",
    "type": "selection"
  },
  "state": {
    "required": false,
    "string": "Status",
    "type": "selection"
  },
  "group_id": {
    "required": false,
    "string": "Procurement Group",
    "type": "many2one"
  },
  "priority": {
    "required": false,
    "string": "Priority",
    "type": "selection"
  },
  "scheduled_date": {
    "required": false,
    "string": "Scheduled Date",
    "type": "datetime"
  },
  "date_deadline": {
    "required": false,
    "string": "Deadline",
    "type": "datetime"
  },
  "has_deadline_issue": {
    "required": false,
    "string": "Is late",
    "type": "boolean"
  },
  "date": {
    "required": false,
    "string": "Creation Date",
    "type": "datetime"
  },
  "date_done": {
    "required": false,
    "string": "Date of Transfer",
    "type": "datetime"
  },
  "delay_alert_date": {
    "required": false,
    "string": "Delay Alert Date",
    "type": "datetime"
  },
  "json_popover": {
    "required": false,
    "string": "JSON data for the popover widget",
    "type": "char"
  },
  "location_id": {
    "required": true,
    "string": "Source Location",
    "type": "many2one"
  },
  "location_dest_id": {
    "required": true,
    "string": "Destination Location",
    "type": "many2one"
  },
  "move_ids": {
    "required": false,
    "string": "Stock Moves",
    "type": "one2many"
  },
  "move_ids_without_package": {
    "required": false,
    "string": "Stock move",
    "type": "one2many"
  },
  "has_scrap_move": {
    "required": false,
    "string": "Has Scrap Moves",
    "type": "boolean"
  },
  "picking_type_id": {
    "required": true,
    "string": "Operation Type",
    "type": "many2one"
  },
  "warehouse_address_id": {
    "required": false,
    "string": "Address",
    "type": "many2one"
  },
  "picking_type_code": {
    "required": false,
    "string": "Type of Operation",
    "type": "selection"
  },
  "picking_type_entire_packs": {
    "required": false,
    "string": "Move Entire Packages",
    "type": "boolean"
  },
  "use_create_lots": {
    "required": false,
    "string": "Create New Lots/Serial Numbers",
    "type": "boolean"
  },
  "use_existing_lots": {
    "required": false,
    "string": "Use Existing Lots/Serial Numbers",
    "type": "boolean"
  },
  "partner_id": {
    "required": false,
    "string": "Contact",
    "type": "many2one"
  },
  "company_id": {
    "required": false,
    "string": "Company",
    "type": "many2one"
  },
  "user_id": {
    "required": false,
    "string": "Responsible",
    "type": "many2one"
  },
  "move_line_ids": {
    "required": false,
    "string": "Operations",
    "type": "one2many"
  },
  "move_line_ids_without_package": {
    "required": false,
    "string": "Operations without package",
    "type": "one2many"
  },
  "move_line_exist": {
    "required": false,
    "string": "Has Pack Operations",
    "type": "boolean"
  },
  "has_packages": {
    "required": false,
    "string": "Has Packages",
    "type": "boolean"
  },
  "show_check_availability": {
    "required": false,
    "string": "Show Check Availability",
    "type": "boolean"
  },
  "show_allocation": {
    "required": false,
    "string": "Show Allocation",
    "type": "boolean"
  },
  "owner_id": {
    "required": false,
    "string": "Assign Owner",
    "type": "many2one"
  },
  "printed": {
    "required": false,
    "string": "Printed",
    "type": "boolean"
  },
  "signature": {
    "required": false,
    "string": "Signature",
    "type": "binary"
  },
  "is_signed": {
    "required": false,
    "string": "Is Signed",
    "type": "boolean"
  },
  "is_locked": {
    "required": false,
    "string": "Is Locked",
    "type": "boolean"
  },
  "weight_bulk": {
    "required": false,
    "string": "Bulk Weight",
    "type": "float"
  },
  "shipping_weight": {
    "required": false,
    "string": "Weight for Shipping",
    "type": "float"
  },
  "shipping_volume": {
    "required": false,
    "string": "Volume for Shipping",
    "type": "float"
  },
  "product_id": {
    "required": false,
    "string": "Product",
    "type": "many2one"
  },
  "lot_id": {
    "required": false,
    "string": "Lot/Serial Number",
    "type": "many2one"
  },
  "show_operations": {
    "required": false,
    "string": "Show Detailed Operations",
    "type": "boolean"
  },
  "show_lots_text": {
    "required": false,
    "string": "Show Lots Text",
    "type": "boolean"
  },
  "has_tracking": {
    "required": false,
    "string": "Has Tracking",
    "type": "boolean"
  },
  "package_level_ids": {
    "required": false,
    "string": "Package Level",
    "type": "one2many"
  },
  "package_level_ids_details": {
    "required": false,
    "string": "Package Level Ids Details",
    "type": "one2many"
  },
  "products_availability": {
    "required": false,
    "string": "Product Availability",
    "type": "char"
  },
  "products_availability_state": {
    "required": false,
    "string": "Products Availability State",
    "type": "selection"
  },
  "picking_properties": {
    "required": false,
    "string": "Properties",
    "type": "properties"
  },
  "show_next_pickings": {
    "required": false,
    "string": "Show Next Pickings",
    "type": "boolean"
  },
  "search_date_category": {
    "required": false,
    "string": "Date Category",
    "type": "selection"
  },
  "partner_country_id": {
    "required": false,
    "string": "Country",
    "type": "many2one"
  },
  "picking_warning_text": {
    "required": false,
    "string": "Picking Instructions",
    "type": "text"
  },
  "create_uid": {
    "required": false,
    "string": "Created by",
    "type": "many2one"
  },
  "create_date": {
    "required": false,
    "string": "Created on",
    "type": "datetime"
  },
  "write_uid": {
    "required": false,
    "string": "Last Updated by",
    "type": "many2one"
  },
  "write_date": {
    "required": false,
    "string": "Last Updated on",
    "type": "datetime"
  },
  "country_code": {
    "required": false,
    "string": "Country Code",
    "type": "char"
  },
  "sale_id": {
    "required": false,
    "string": "Sales Order",
    "type": "many2one"
  },
  "carrier_price": {
    "required": false,
    "string": "Shipping Cost",
    "type": "float"
  },
  "delivery_type": {
    "required": false,
    "string": "Provider",
    "type": "selection"
  },
  "allowed_carrier_ids": {
    "required": false,
    "string": "Allowed Carrier",
    "type": "many2many"
  },
  "carrier_id": {
    "required": false,
    "string": "Carrier",
    "type": "many2one"
  },
  "weight": {
    "required": false,
    "string": "Weight",
    "type": "float"
  },
  "carrier_tracking_ref": {
    "required": false,
    "string": "Tracking Reference",
    "type": "char"
  },
  "carrier_tracking_url": {
    "required": false,
    "string": "Tracking URL",
    "type": "char"
  },
  "weight_uom_name": {
    "required": false,
    "string": "Weight unit of measure label",
    "type": "char"
  },
  "is_return_picking": {
    "required": false,
    "string": "Is Return Picking",
    "type": "boolean"
  },
  "return_label_ids": {
    "required": false,
    "string": "Return Label",
    "type": "one2many"
  },
  "destination_country_code": {
    "required": false,
    "string": "Destination Country",
    "type": "char"
  },
  "website_id": {
    "required": false,
    "string": "Website",
    "type": "many2one"
  }
}
```

## GET `/pickings`

Status: 200

```json
{
  "success": true,
  "count": 2,
  "pickings": [
    {
      "id": 1,
      "name": "WH/OUT/00001",
      "origin": "S00001",
      "state": "confirmed",
      "partner_id": [
        3,
        "Rishabh Choudhary, Rishabh Choudhary"
      ],
      "scheduled_date": "2026-01-05 11:16:57",
      "date_done": false,
      "picking_type_id": [
        2,
        "Point 2 Point Communications-v2: Delivery Orders"
      ],
      "location_id": [
        8,
        "WH/Stock"
      ],
      "location_dest_id": [
        5,
        "Partners/Customers"
      ],
      "move_ids_without_package": [
        1
      ]
    },
    {
      "id": 2,
      "name": "WH/OUT/00002",
      "origin": "S00003",
      "state": "assigned",
      "partner_id": [
        8,
        "Rishabh Tech, Rishabh"
      ],
      "scheduled_date": "2026-01-05 11:34:10",
      "date_done": false,
      "picking_type_id": [
        2,
        "Point 2 Point Communications-v2: Delivery Orders"
      ],
      "location_id": [
        8,
        "WH/Stock"
      ],
      "location_dest_id": [
        5,
        "Partners/Customers"
      ],
      "move_ids_without_package": [
        2,
        3
      ]
    }
  ]
}
```

## GET `/mrp/orders/fields`

Status: 200

```text

```

## GET `/mrp/orders`

Status: 400

```json
{
  "error": {
    "code": 0,
    "message": "Odoo Server Error",
    "data": {
      "name": "odoo.exceptions.UserError",
      "message": "Object mrp.production doesn't exist",
      "arguments": [
        "Object mrp.production doesn't exist"
      ],
      "context": {},
      "debug": "Traceback (most recent call last):\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/http.py\", line 2255, in _transactioning\n    return service_model.retrying(func, env=self.env)\n           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/service/model.py\", line 176, in retrying\n    result = func()\n             ^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/http.py\", line 2222, in _serve_ir_http\n    response = self.dispatcher.dispatch(rule.endpoint, args)\n               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/http.py\", line 2484, in dispatch\n    result = self.request.registry['ir.http']._dispatch(endpoint)\n             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/addons/base/models/ir_http.py\", line 352, in _dispatch\n    result = endpoint(**request.params)\n             ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/http.py\", line 773, in route_wrapper\n    result = endpoint(self, *args, **params_ok)\n             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/custom/trial/saas_trial/controllers/main.py\", line 474, in jsonrpc\n    res = super().jsonrpc(service, method, args)\n          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/http.py\", line 773, in route_wrapper\n    result = endpoint(self, *args, **params_ok)\n             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/addons/rpc/controllers.py\", line 177, in jsonrpc\n    return dispatch_rpc(service, method, args)\n           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/http.py\", line 424, in dispatch_rpc\n    return dispatch(method, params)\n           ^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/service/model.py\", line 108, in dispatch\n    res = execute_kw(db, uid, model, method_, *args)\n          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/service/model.py\", line 136, in execute_kw\n    return execute(db, uid, obj, method, *args, **kw or {})\n           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/service/model.py\", line 142, in execute\n    res = execute_cr(cr, uid, obj, method, *args, **kw)\n          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/service/model.py\", line 125, in execute_cr\n    raise UserError(f\"Object {obj} doesn't exist\")  # pylint: disable=missing-gettext\n    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\nodoo.exceptions.UserError: Object mrp.production doesn't exist\n"
    }
  }
}
```

## GET `/mrp/boms`

Status: 400

```json
{
  "error": {
    "code": 0,
    "message": "Odoo Server Error",
    "data": {
      "name": "odoo.exceptions.UserError",
      "message": "Object mrp.bom doesn't exist",
      "arguments": [
        "Object mrp.bom doesn't exist"
      ],
      "context": {},
      "debug": "Traceback (most recent call last):\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/http.py\", line 2255, in _transactioning\n    return service_model.retrying(func, env=self.env)\n           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/service/model.py\", line 176, in retrying\n    result = func()\n             ^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/http.py\", line 2222, in _serve_ir_http\n    response = self.dispatcher.dispatch(rule.endpoint, args)\n               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/http.py\", line 2484, in dispatch\n    result = self.request.registry['ir.http']._dispatch(endpoint)\n             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/addons/base/models/ir_http.py\", line 352, in _dispatch\n    result = endpoint(**request.params)\n             ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/http.py\", line 773, in route_wrapper\n    result = endpoint(self, *args, **params_ok)\n             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/custom/trial/saas_trial/controllers/main.py\", line 474, in jsonrpc\n    res = super().jsonrpc(service, method, args)\n          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/http.py\", line 773, in route_wrapper\n    result = endpoint(self, *args, **params_ok)\n             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/addons/rpc/controllers.py\", line 177, in jsonrpc\n    return dispatch_rpc(service, method, args)\n           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/http.py\", line 424, in dispatch_rpc\n    return dispatch(method, params)\n           ^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/service/model.py\", line 108, in dispatch\n    res = execute_kw(db, uid, model, method_, *args)\n          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/service/model.py\", line 136, in execute_kw\n    return execute(db, uid, obj, method, *args, **kw or {})\n           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/service/model.py\", line 142, in execute\n    res = execute_cr(cr, uid, obj, method, *args, **kw)\n          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"/home/odoo/src/odoo/saas-18.4/odoo/service/model.py\", line 125, in execute_cr\n    raise UserError(f\"Object {obj} doesn't exist\")  # pylint: disable=missing-gettext\n    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\nodoo.exceptions.UserError: Object mrp.bom doesn't exist\n"
    }
  }
}
```

## GET `/finance/payment-terms/fields`

Status: 200

```json
{
  "id": {
    "required": false,
    "string": "ID",
    "type": "integer"
  },
  "display_name": {
    "required": false,
    "string": "Display Name",
    "type": "char"
  },
  "name": {
    "required": true,
    "string": "Payment Terms",
    "type": "char"
  },
  "active": {
    "required": false,
    "string": "Active",
    "type": "boolean"
  },
  "note": {
    "required": false,
    "string": "Description on the Invoice",
    "type": "html"
  },
  "line_ids": {
    "required": false,
    "string": "Terms",
    "type": "one2many"
  },
  "company_id": {
    "required": false,
    "string": "Company",
    "type": "many2one"
  },
  "fiscal_country_codes": {
    "required": false,
    "string": "Fiscal Country Codes",
    "type": "char"
  },
  "sequence": {
    "required": true,
    "string": "Sequence",
    "type": "integer"
  },
  "currency_id": {
    "required": false,
    "string": "Currency",
    "type": "many2one"
  },
  "display_on_invoice": {
    "required": false,
    "string": "Show installment dates",
    "type": "boolean"
  },
  "example_amount": {
    "required": false,
    "string": "Example Amount",
    "type": "monetary"
  },
  "example_date": {
    "required": false,
    "string": "Date example",
    "type": "date"
  },
  "example_invalid": {
    "required": false,
    "string": "Example Invalid",
    "type": "boolean"
  },
  "example_preview": {
    "required": false,
    "string": "Example Preview",
    "type": "html"
  },
  "example_preview_discount": {
    "required": false,
    "string": "Example Preview Discount",
    "type": "html"
  },
  "discount_percentage": {
    "required": false,
    "string": "Discount %",
    "type": "float"
  },
  "discount_days": {
    "required": false,
    "string": "Discount Days",
    "type": "integer"
  },
  "early_pay_discount_computation": {
    "required": false,
    "string": "Cash Discount Tax Reduction",
    "type": "selection"
  },
  "early_discount": {
    "required": false,
    "string": "Early Discount",
    "type": "boolean"
  },
  "create_uid": {
    "required": false,
    "string": "Created by",
    "type": "many2one"
  },
  "create_date": {
    "required": false,
    "string": "Created on",
    "type": "datetime"
  },
  "write_uid": {
    "required": false,
    "string": "Last Updated by",
    "type": "many2one"
  },
  "write_date": {
    "required": false,
    "string": "Last Updated on",
    "type": "datetime"
  }
}
```

## GET `/finance/payment-terms`

Status: 200

```json
{
  "success": true,
  "count": 10,
  "payment_terms": [
    {
      "id": 1,
      "name": "Immediate Payment",
      "note": "<p>Payment terms: Immediate Payment</p>",
      "line_ids": [
        1
      ],
      "company_id": false,
      "active": true
    },
    {
      "id": 2,
      "name": "15 Days",
      "note": "<p>Payment terms: 15 Days</p>",
      "line_ids": [
        2
      ],
      "company_id": false,
      "active": true
    },
    {
      "id": 3,
      "name": "21 Days",
      "note": "<p>Payment terms: 21 Days</p>",
      "line_ids": [
        3
      ],
      "company_id": false,
      "active": true
    },
    {
      "id": 4,
      "name": "30 Days",
      "note": "<p>Payment terms: 30 Days</p>",
      "line_ids": [
        4
      ],
      "company_id": false,
      "active": true
    },
    {
      "id": 5,
      "name": "45 Days",
      "note": "<p>Payment terms: 45 Days</p>",
      "line_ids": [
        5
      ],
      "company_id": false,
      "active": true
    },
    {
      "id": 6,
      "name": "End of Following Month",
      "note": "<p>Payment terms: End of Following Month</p>",
      "line_ids": [
        6
      ],
      "company_id": false,
      "active": true
    },
    {
      "id": 7,
      "name": "10 Days after End of Next Month",
      "note": "<p>Payment terms: 10 Days after End of Next Month</p>",
      "line_ids": [
        7
      ],
      "company_id": false,
      "active": true
    },
    {
      "id": 8,
      "name": "30% Now, Balance 60 Days",
      "note": "<p>Payment terms: 30% Now, Balance 60 Days</p>",
      "line_ids": [
        8,
        9
      ],
      "company_id": false,
      "active": true
    },
    {
      "id": 9,
      "name": "2/7 Net 30",
      "note": "<p>Payment terms: 30 Days, 2% Early Payment Discount under 7 days</p>",
      "line_ids": [
        10
      ],
      "company_id": false,
      "active": true
    },
    {
      "id": 10,
      "name": "90 days, on the 10th",
      "note": "<p>Payment terms: 90 days, on the 10th</p>",
      "line_ids": [
        11
      ],
      "company_id": false,
      "active": true
    }
  ]
}
```
