import Stripe from 'stripe';

export const mockStripeSubscriptionUpdatedEventWithoutUpdatedItem: Stripe.CustomerSubscriptionUpdatedEvent =
  {
    type: 'customer.subscription.updated',
    data: {
      object: {
        id: 'sub_1RFLOkQjnlxerLN36QL6lXER',
        object: 'subscription',
        application: null,
        application_fee_percent: null,
        billing_cycle_anchor: 1745007630,
        billing_cycle_anchor_config: null,
        automatic_tax: {
          enabled: false,
          liability: null,
        },
        billing_thresholds: null,
        cancel_at: null,
        cancel_at_period_end: false,
        canceled_at: null,
        cancellation_details: {
          comment: null,
          feedback: null,
          reason: null,
        },
        collection_method: 'charge_automatically',
        created: 1745007630,
        currency: 'usd',
        current_period_end: 1747599630,
        current_period_start: 1745007630,
        customer: 'cus_S9eiHiQ8lNbIkL',
        days_until_due: null,
        default_payment_method: null,
        default_source: null,
        default_tax_rates: [],
        description: null,
        discount: null,
        discounts: [],
        ended_at: null,
        invoice_settings: {
          account_tax_ids: null,
          issuer: {
            type: 'self',
          },
        },
        items: {
          object: 'list',
          data: [
            {
              id: 'si_S9einNoUMK9WAL',
              object: 'subscription_item',
              billing_thresholds: null,
              created: 1745007631,
              discounts: [],
              metadata: {},
              plan: {
                id: 'price_1RFLOkQjnlxerLN3WzE0SNgt',
                object: 'plan',
                active: true,
                aggregate_usage: null,
                amount: 1500,
                amount_decimal: '1500',
                billing_scheme: 'per_unit',
                created: 1745007630,
                currency: 'usd',
                interval: 'month',
                interval_count: 1,
                livemode: false,
                metadata: {},
                meter: null,
                nickname: null,
                product: 'prod_S9eiEm1mzxUNjJ',
                tiers_mode: null,
                transform_usage: null,
                trial_period_days: null,
                usage_type: 'licensed',
              },
              price: {
                id: 'price_1RFLOkQjnlxerLN3WzE0SNgt',
                object: 'price',
                active: true,
                billing_scheme: 'per_unit',
                created: 1745007630,
                currency: 'usd',
                custom_unit_amount: null,
                livemode: false,
                lookup_key: null,
                metadata: {},
                nickname: null,
                product: 'prod_S9eiEm1mzxUNjJ',
                recurring: {
                  aggregate_usage: null,
                  interval: 'month',
                  interval_count: 1,
                  meter: null,
                  trial_period_days: null,
                  usage_type: 'licensed',
                },
                tax_behavior: 'unspecified',
                tiers_mode: null,
                transform_quantity: null,
                type: 'recurring',
                unit_amount: 1500,
                unit_amount_decimal: '1500',
              },
              quantity: 1,
              subscription: 'sub_1RFLOkQjnlxerLN36QL6lXER',
              tax_rates: [],
            },
          ],
          has_more: false,
          url: '/v1/subscription_items?subscription=sub_1RFLOkQjnlxerLN36QL6lXER',
        },
        latest_invoice: 'in_1RFLOkQjnlxerLN3aexylENH',
        livemode: false,
        metadata: {
          foo: 'bar',
        },
        next_pending_invoice_item_invoice: null,
        on_behalf_of: null,
        pause_collection: null,
        payment_settings: {
          payment_method_options: null,
          payment_method_types: null,
          save_default_payment_method: 'off',
        },
        pending_invoice_item_interval: null,
        pending_setup_intent: null,
        pending_update: null,
        schedule: null,
        start_date: 1745007630,
        status: 'active',
        test_clock: null,
        transfer_data: null,
        trial_end: null,
        trial_settings: {
          end_behavior: {
            missing_payment_method: 'create_invoice',
          },
        },
        trial_start: null,
      },
      previous_attributes: {
        metadata: {},
      },
    },
    id: 'evt_1RFLOkQjnlxerLN36QL6lXER',
    object: 'event',
    api_version: '2024-04-10',
    created: 1745007630,
    livemode: false,
    pending_webhooks: 0,
    request: null,
  };

export const mockStripeSubscriptionUpdatedEventWithUpdatedItemOnly: Stripe.CustomerSubscriptionUpdatedEvent =
  {
    type: 'customer.subscription.updated',
    data: {
      object: {
        id: 'sub_1RFLOkQjnlxerLN36QL6lXER',
        object: 'subscription',
        application: null,
        application_fee_percent: null,
        billing_cycle_anchor: 1745007630,
        billing_cycle_anchor_config: null,
        automatic_tax: {
          enabled: false,
          liability: null,
        },
        billing_thresholds: null,
        cancel_at: null,
        cancel_at_period_end: false,
        canceled_at: null,
        cancellation_details: {
          comment: null,
          feedback: null,
          reason: null,
        },
        collection_method: 'charge_automatically',
        created: 1745007630,
        currency: 'usd',
        current_period_end: 1747599630,
        current_period_start: 1745007630,
        customer: 'cus_S9eiHiQ8lNbIkL',
        days_until_due: null,
        default_payment_method: null,
        default_source: null,
        default_tax_rates: [],
        description: null,
        discount: null,
        discounts: [],
        ended_at: null,
        invoice_settings: {
          account_tax_ids: null,
          issuer: {
            type: 'self',
          },
        },
        items: {
          object: 'list',
          data: [
            {
              id: 'updated_item_id',
              object: 'subscription_item',
              billing_thresholds: null,
              created: 1745007631,
              discounts: [],
              metadata: {},
              plan: {
                id: 'price_1RFLOkQjnlxerLN3WzE0SNgt',
                object: 'plan',
                active: true,
                aggregate_usage: null,
                amount: 1500,
                amount_decimal: '1500',
                billing_scheme: 'per_unit',
                created: 1745007630,
                currency: 'usd',
                interval: 'month',
                interval_count: 1,
                livemode: false,
                metadata: {},
                meter: null,
                nickname: null,
                product: 'prod_S9eiEm1mzxUNjJ',
                tiers_mode: null,
                transform_usage: null,
                trial_period_days: null,
                usage_type: 'licensed',
              },
              price: {
                id: 'price_1RFLOkQjnlxerLN3WzE0SNgt',
                object: 'price',
                active: true,
                billing_scheme: 'per_unit',
                created: 1745007630,
                currency: 'usd',
                custom_unit_amount: null,
                livemode: false,
                lookup_key: null,
                metadata: {},
                nickname: null,
                product: 'prod_S9eiEm1mzxUNjJ',
                recurring: {
                  aggregate_usage: null,
                  interval: 'month',
                  interval_count: 1,
                  meter: null,
                  trial_period_days: null,
                  usage_type: 'licensed',
                },
                tax_behavior: 'unspecified',
                tiers_mode: null,
                transform_quantity: null,
                type: 'recurring',
                unit_amount: 1500,
                unit_amount_decimal: '1500',
              },
              quantity: 1,
              subscription: 'sub_1RFLOkQjnlxerLN36QL6lXER',
              tax_rates: [],
            },
          ],
          has_more: false,
          url: '/v1/subscription_items?subscription=sub_1RFLOkQjnlxerLN36QL6lXER',
        },
        latest_invoice: 'in_1RFLOkQjnlxerLN3aexylENH',
        livemode: false,
        metadata: {
          foo: 'bar',
        },
        next_pending_invoice_item_invoice: null,
        on_behalf_of: null,
        pause_collection: null,
        payment_settings: {
          payment_method_options: null,
          payment_method_types: null,
          save_default_payment_method: 'off',
        },
        pending_invoice_item_interval: null,
        pending_setup_intent: null,
        pending_update: null,
        schedule: null,
        start_date: 1745007630,
        status: 'active',
        test_clock: null,
        transfer_data: null,
        trial_end: null,
        trial_settings: {
          end_behavior: {
            missing_payment_method: 'create_invoice',
          },
        },
        trial_start: null,
      },
      previous_attributes: {
        items: {
          data: [
            {
              id: 'updated_item_id',
              object: 'subscription_item',
              billing_thresholds: null,
              created: 1745007631,
              discounts: [],
              metadata: {},
              plan: {
                id: 'price_1RFLOkQjnlxerLN3WzE0SNgt',
                object: 'plan',
                active: true,
                aggregate_usage: null,
                amount: 1500,
                amount_decimal: '1500',
                billing_scheme: 'per_unit',
                created: 1745007630,
                currency: 'usd',
                interval: 'month',
                interval_count: 1,
                livemode: false,
                metadata: {},
                meter: null,
                nickname: null,
                product: 'prod_S9eiEm1mzxUNjJ',
                tiers_mode: null,
                transform_usage: null,
                trial_period_days: null,
                usage_type: 'licensed',
              },
              price: {
                id: 'price_1RFLOkQjnlxerLN3WzE0SNgt',
                object: 'price',
                active: true,
                billing_scheme: 'per_unit',
                created: 1745007630,
                currency: 'usd',
                custom_unit_amount: null,
                livemode: false,
                lookup_key: null,
                metadata: {},
                nickname: null,
                product: 'prod_S9eiEm1mzxUNjJ',
                recurring: {
                  aggregate_usage: null,
                  interval: 'month',
                  interval_count: 1,
                  meter: null,
                  trial_period_days: null,
                  usage_type: 'licensed',
                },
                tax_behavior: 'unspecified',
                tiers_mode: null,
                transform_quantity: null,
                type: 'recurring',
                unit_amount: 1500,
                unit_amount_decimal: '1500',
              },
              quantity: 1,
              subscription: 'sub_1RFLOkQjnlxerLN36QL6lXER',
              tax_rates: [],
            },
          ],
          object: 'list',
          has_more: false,
          url: '/v1/subscription_items?subscription=sub_1RFLOkQjnlxerLN36QL6lXER',
        },
      },
    },
    id: 'evt_1RFLOkQjnlxerLN36QL6lXER',
    object: 'event',
    api_version: '2024-04-10',
    created: 1745007630,
    livemode: false,
    pending_webhooks: 0,
    request: null,
  };

export const mockStripeSubscriptionUpdatedEventWithDeletedItem: Stripe.CustomerSubscriptionUpdatedEvent =
  {
    type: 'customer.subscription.updated',
    data: {
      object: {
        id: 'sub_1RFLOkQjnlxerLN36QL6lXER',
        object: 'subscription',
        application: null,
        application_fee_percent: null,
        billing_cycle_anchor: 1745007630,
        billing_cycle_anchor_config: null,
        automatic_tax: {
          enabled: false,
          liability: null,
        },
        billing_thresholds: null,
        cancel_at: null,
        cancel_at_period_end: false,
        canceled_at: null,
        cancellation_details: {
          comment: null,
          feedback: null,
          reason: null,
        },
        collection_method: 'charge_automatically',
        created: 1745007630,
        currency: 'usd',
        current_period_end: 1747599630,
        current_period_start: 1745007630,
        customer: 'cus_S9eiHiQ8lNbIkL',
        days_until_due: null,
        default_payment_method: null,
        default_source: null,
        default_tax_rates: [],
        description: null,
        discount: null,
        discounts: [],
        ended_at: null,
        invoice_settings: {
          account_tax_ids: null,
          issuer: {
            type: 'self',
          },
        },
        items: {
          object: 'list',
          data: [
            {
              id: 'updated_item_id',
              object: 'subscription_item',
              billing_thresholds: null,
              created: 1745007631,
              discounts: [],
              metadata: {},
              plan: {
                id: 'price_1RFLOkQjnlxerLN3WzE0SNgt',
                object: 'plan',
                active: true,
                aggregate_usage: null,
                amount: 1500,
                amount_decimal: '1500',
                billing_scheme: 'per_unit',
                created: 1745007630,
                currency: 'usd',
                interval: 'month',
                interval_count: 1,
                livemode: false,
                metadata: {},
                meter: null,
                nickname: null,
                product: 'prod_S9eiEm1mzxUNjJ',
                tiers_mode: null,
                transform_usage: null,
                trial_period_days: null,
                usage_type: 'licensed',
              },
              price: {
                id: 'price_1RFLOkQjnlxerLN3WzE0SNgt',
                object: 'price',
                active: true,
                billing_scheme: 'per_unit',
                created: 1745007630,
                currency: 'usd',
                custom_unit_amount: null,
                livemode: false,
                lookup_key: null,
                metadata: {},
                nickname: null,
                product: 'prod_S9eiEm1mzxUNjJ',
                recurring: {
                  aggregate_usage: null,
                  interval: 'month',
                  interval_count: 1,
                  meter: null,
                  trial_period_days: null,
                  usage_type: 'licensed',
                },
                tax_behavior: 'unspecified',
                tiers_mode: null,
                transform_quantity: null,
                type: 'recurring',
                unit_amount: 1500,
                unit_amount_decimal: '1500',
              },
              quantity: 1,
              subscription: 'sub_1RFLOkQjnlxerLN36QL6lXER',
              tax_rates: [],
            },
          ],
          has_more: false,
          url: '/v1/subscription_items?subscription=sub_1RFLOkQjnlxerLN36QL6lXER',
        },
        latest_invoice: 'in_1RFLOkQjnlxerLN3aexylENH',
        livemode: false,
        metadata: {
          foo: 'bar',
        },
        next_pending_invoice_item_invoice: null,
        on_behalf_of: null,
        pause_collection: null,
        payment_settings: {
          payment_method_options: null,
          payment_method_types: null,
          save_default_payment_method: 'off',
        },
        pending_invoice_item_interval: null,
        pending_setup_intent: null,
        pending_update: null,
        schedule: null,
        start_date: 1745007630,
        status: 'active',
        test_clock: null,
        transfer_data: null,
        trial_end: null,
        trial_settings: {
          end_behavior: {
            missing_payment_method: 'create_invoice',
          },
        },
        trial_start: null,
      },
      previous_attributes: {
        items: {
          data: [
            {
              id: 'deleted_item_id',
              object: 'subscription_item',
              billing_thresholds: null,
              created: 1745007631,
              discounts: [],
              metadata: {},
              plan: {
                id: 'price_1RFLOkQjnlxerLN3WzE0SNgt',
                object: 'plan',
                active: true,
                aggregate_usage: null,
                amount: 1500,
                amount_decimal: '1500',
                billing_scheme: 'per_unit',
                created: 1745007630,
                currency: 'usd',
                interval: 'month',
                interval_count: 1,
                livemode: false,
                metadata: {},
                meter: null,
                nickname: null,
                product: 'prod_S9eiEm1mzxUNjJ',
                tiers_mode: null,
                transform_usage: null,
                trial_period_days: null,
                usage_type: 'licensed',
              },
              price: {
                id: 'price_1RFLOkQjnlxerLN3WzE0SNgt',
                object: 'price',
                active: true,
                billing_scheme: 'per_unit',
                created: 1745007630,
                currency: 'usd',
                custom_unit_amount: null,
                livemode: false,
                lookup_key: null,
                metadata: {},
                nickname: null,
                product: 'prod_S9eiEm1mzxUNjJ',
                recurring: {
                  aggregate_usage: null,
                  interval: 'month',
                  interval_count: 1,
                  meter: null,
                  trial_period_days: null,
                  usage_type: 'licensed',
                },
                tax_behavior: 'unspecified',
                tiers_mode: null,
                transform_quantity: null,
                type: 'recurring',
                unit_amount: 1500,
                unit_amount_decimal: '1500',
              },
              quantity: 1,
              subscription: 'sub_1RFLOkQjnlxerLN36QL6lXER',
              tax_rates: [],
            },
            {
              id: 'updated_item_id',
              object: 'subscription_item',
              billing_thresholds: null,
              created: 1745007631,
              discounts: [],
              metadata: {},
              plan: {
                id: 'price_1RFLOkQjnlxerLN3WzE0SNgt',
                object: 'plan',
                active: true,
                aggregate_usage: null,
                amount: 1500,
                amount_decimal: '1500',
                billing_scheme: 'per_unit',
                created: 1745007630,
                currency: 'usd',
                interval: 'month',
                interval_count: 1,
                livemode: false,
                metadata: {},
                meter: null,
                nickname: null,
                product: 'prod_S9eiEm1mzxUNjJ',
                tiers_mode: null,
                transform_usage: null,
                trial_period_days: null,
                usage_type: 'licensed',
              },
              price: {
                id: 'price_1RFLOkQjnlxerLN3WzE0SNgt',
                object: 'price',
                active: true,
                billing_scheme: 'per_unit',
                created: 1745007630,
                currency: 'usd',
                custom_unit_amount: null,
                livemode: false,
                lookup_key: null,
                metadata: {},
                nickname: null,
                product: 'prod_S9eiEm1mzxUNjJ',
                recurring: {
                  aggregate_usage: null,
                  interval: 'month',
                  interval_count: 1,
                  meter: null,
                  trial_period_days: null,
                  usage_type: 'licensed',
                },
                tax_behavior: 'unspecified',
                tiers_mode: null,
                transform_quantity: null,
                type: 'recurring',
                unit_amount: 1500,
                unit_amount_decimal: '1500',
              },
              quantity: 1,
              subscription: 'sub_1RFLOkQjnlxerLN36QL6lXER',
              tax_rates: [],
            },
          ],
          object: 'list',
          has_more: false,
          url: '/v1/subscription_items?subscription=sub_1RFLOkQjnlxerLN36QL6lXER',
        },
      },
    },
    id: 'evt_1RFLOkQjnlxerLN36QL6lXER',
    object: 'event',
    api_version: '2024-04-10',
    created: 1745007630,
    livemode: false,
    pending_webhooks: 0,
    request: null,
  };
