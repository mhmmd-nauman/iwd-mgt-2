define([
    'uiElement',
    'ko',
    'jquery',
    'Magento_Checkout/js/model/quote',//
], function (Component,ko,$, quote) {
    'use strict';

    var checkoutConfig = window.checkoutConfig;
    
    return Component.extend({
        dob_month: ko.observable("MM"),
        dob_day: ko.observable("DD"),
        dob_year: ko.observable("YYYY"),
        defaults: {
            template: 'Nauman1_CheckoutCustomField/testcomponent',
            totala:12,
            tracks:{totala:true}
        },

        initialize: function () {
            this._super();
        },

        isActive:function(){
            return true;
        },
        onSubmit1: function() {
           // alert(this.dob_month());
           var shippingAddress = quote.shippingAddress();
           console.log(shippingAddress);
           return true;
           alert($("#dob_month").val());
           var zipcode= encodeURIComponent("93306");
           var firstname= encodeURIComponent("Lucy");
           var lastname = encodeURIComponent("Jones");
           var address = encodeURIComponent("1012 Main St");
           var dob = encodeURIComponent("8/2/1969");
           var country = encodeURIComponent("");
           var gender = encodeURIComponent("F");
           var phone = encodeURIComponent("2082243569");
           var param = "sid=SIDE18IH56181033201564336442857001616154"+
                   "&zip="+zipcode+"&first="+firstname+"&last="+lastname+
                   "&address="+address+"&dob="+dob+"&country="+country+
                   "&gender="+gender+"&phone="+phone;
            var url = "https://www.INTEGRITY-DIRECT.com/online/authentication_url.asp";
            var count = param.length;
           $.ajax({
                    showLoader: true,
                    url: url,
                    data: param,
                    type: "POST",
                    dataType: 'JSONP',
                    headers: {  'Content-type': 'application/x-www-form-urlencoded',
                                'Content-Length': count,
                                'Access-Control-Allow-Origin':'*'
                             }
                }).done(function (data) {
                    // tid=U5268F6318C73A4C8612&mc=1&mc_desc=zip;last;first_i;yyyy&err_code=0&err_desc=
                    var err_code = 0
                    var mc = 0;
                    var err_desc = "";
                    var ageVerificationFlag = 1;
                    var message = "";
                    if(err_code === 0){            
                        if(mc !== 0){               
                                //echo "response=verified";            
                        }else{ 
                                ageVerificationFlag = 0;              
                                message = 'We were not able to verify the identity attributes you submitted. Please verify that the identity attributes you provided are correct. If your legal first name is William, make sure to submit William instead of Bill. If you have moved recently, please try with your previous address or if you have recently married, please try with your maiden name.';         
                        }         
                    }else{  
                                ageVerificationFlag = 0; 
                                message = err_desc;                
                        }    
                    
                    console.log(data);
            });
           
           
        }



    });
});