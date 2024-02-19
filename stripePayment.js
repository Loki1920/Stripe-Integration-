// redirectOnClick.js
import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class RedirectOnClick extends NavigationMixin(LightningElement) {
    handleRedirect() {
        
        const urlToRedirect = 'https://checkout.stripe.com/c/pay/cs_test_a1um03eOAQRedqjOTe4VrbCfvFilSL9ifw3ndPX1qDyC0LMJnpBVItZd0B#fidqdXFsaGx2cWxmUmRpaWBxV2BrYWB3Jz9xd3BgKSdkdWxOYHwnPyd1blpxYHZxWjA0Sm9MZn1WQ0NiQjNhSn1KNEBLTVVAPHA0a1ZQVUlicFBHTUhnN11MVVVfdnBcbFJgT0RNd0tAMDVOclZVclBANmtwU3IwcmxSfW9vMHRSNzduTEttaENKNTUxUGdtcnwzaycpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl';
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: urlToRedirect
            }
        });

        
    }
}
