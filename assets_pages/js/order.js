$(function() {
    let isSubmit = false;
    let phoneNumberMin = 5;

	$('form.main-order-form').submit(function(e) {
        if (isSubmit){
            return false;
        }

        let btn = $("button, input[type=submit]", $(this));

        let form = $(this);
        let phone = $("[name=phone]:visible", form);
        let phoneNumber = $.trim(phone.val());
        let phoneNumberClear = phoneNumber.replace(/[^0-9]+/g, '');

        if (phone.length) {
            e.preventDefault();

            let phoneMinLength = (phonePrefix.length - 1) + phoneNumberMin;

            if (phoneNumber.length < phoneMinLength){
                return alert(phoneError5);
            }

            if (phoneNumberClear.length == 11 && phoneNumberClear.charAt(0) == 7 && phoneNumberClear.charAt(1) != 9) {
                return alert('Введите мобильный номер');
            }

            btn.prop("disabled", true);
            isSubmit = true;

            Lib.request('/Order/Create', $(this).serialize(), function(result, data) {
                if (!result && data){
                    isSubmit = false;
                    btn.prop("disabled", false);
                    return alert(data);
                }
                if (data.redirect)
                    return document.location.href = data.redirect;
            });
        }
	});
});