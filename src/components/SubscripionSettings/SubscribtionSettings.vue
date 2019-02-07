<template>
    <el-card class="block subs-settings-wr">
        <el-header height="auto" class="block-title subs-settings-title">
            Subscription Settings
        </el-header>
        <span class="label">subscription status</span>
        <div class="subscription-badge" v-bind:class="{ active: subscription.active, inactive: !subscription.active }">
            {{subscription.active ? `active till ${subscription.end}` : 'inactive - resubscribe below'}}
        </div>
        <div class="subs-prev-payments">
            <span class="label">previous payments</span>
        </div>
        <div class="payment-history" v-for="payment in paymentsHistory" v-bind:key="payment.transactionId">
            <div class="payment-history__top">
                <span class="payment-history__amount">{{payment.amount}}</span>
                <span class="payment-history__text date">{{payment.date}}</span>
            </div>
            <span class="payment-history__text tr-id">{{`Tx id: ${cutTransactionId(payment.transactionId)}`}}</span>
        </div>
        <span class="payment-history__more">Show more</span>
    </el-card>
</template>

<script>
    export default {
        data() {
          return {
            subscription: {
              active: true,
              end: '31/01/2019'
            },
            paymentsHistory: [
              { amount: '0.00014 BTC ($50)', date: '28/01/2019 at 14:23', transactionId: '0x7f6fd79b4bf0d72e35fc0fa3f8459c74'},
              { amount: '0.00014 BTC ($50)', date: '28/01/2019 at 14:23', transactionId: '0x7f6fd79b4bf0d72e35fc0fa3f8459c74'},
              { amount: '0.00014 BTC ($50)', date: '28/01/2019 at 14:23', transactionId: '0x7f6fd79b4bf0d72e35fc0fa3f8459c74'},
            ]
          }
        },
        methods: {
          cutTransactionId: (str) => str.length > 29 ? `${str.slice(0, 29)}...` : str
        },
    }
</script>

<style lang="scss">
    .subs-settings-wr {
        padding: 32px;
        width: 360px;
        margin-top: 30px;
    }

    .subs-prev-payments {
        margin-top: 30px;
    }

    .payment-history {
        padding: 20px 0;
        border-bottom: solid 1px rgba(255, 255, 255, .08);
    }
    .payment-history__top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .payment-history__amount {
        color: #09AE09;
    }

    .payment-history__more {
        color: #fff;
        opacity: 0.4;
        display: block;
        text-transform: uppercase;
        position: relative;
        width: 120px;
        margin: 25px auto 0;
        background: url('../../assets/chevron.svg') no-repeat right;
    }

    .subscription-badge {
        max-width: 300px;
        text-align: center;
        padding: 11px 0 12px;
        text-transform: uppercase;
        margin-top: 12px;
        &.active {
             background: #012E00;
             border: 1px solid #039E00;
             border-radius: 5px;
             color: #05EE00;
         }
        &.inactive {
             background: #353700;
             border: 1px solid #4B4D00;
             border-radius: 5px;
             color: #959700;
         }
    }
</style>