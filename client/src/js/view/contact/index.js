import ApiService from '../../service/api.service';

function validform(formId){
    return $(formId).validate({
       rules: {
          company: {
              required: true,
              minlength: 6
          },
          name: {
              required: true,
              minlength: 2
          },
          phone: {
              required: true,
              minlength: 6
          },
          email: {
              required: true,
              email: true
          },
          address: "required",
          message: {
              required: true,
              minlength: 5
          },
          subject: "required",
          authcode: {
              required: true,
              minlength: 4
          }
      },
      messages: {
          company: {
              required: "請輸入公司名稱",
              minlength: "公司名稱最少由六個字符組成"
          },
          name: {
              required: "請輸入聯系人",
              minlength: "聯系人最少由兩個字符組成"
          },
          phone: {
              required: "請輸入電話",
              minlength: "電話號碼最少由六個字符組成"
          },
          email: {
              required: "請輸入電郵",
              email: "請輸入正確的電郵"
          },
          message: {
              required: "請輸入查詢事項",
              minlength: "查詢事項最少由五個字符組成"
          },
          address: {
              required: "請輸入聯絡地址"
          },
          authcode: {
              required: "請輸入驗證碼",
              minlength: "驗證碼必需由四個字符組成"
          }
      }
    });
  }
  $(() => {
    $("#contactSubmit").click(async function(){
        
        if(!validform("#contact_body").form()) {
  
        } else {
          await ApiService.submitContactForm(
              {
                  "Contact_ID": 0,
                  "Company": $("#formCompany").val(),
                  "Contacts": $("#formName").val(),
                  "Phone": $("#formPhone").val(),
                  "Email": $("#formEmail").val(),
                  "Matter": "string",
                  "Wechat": "string",
                  "WhatsApp": "string",
                  "Contact_Status": 0,
                  "Processing_Result": $("#formMesg").val()
                },
                $("#formCode").val()
          ).then(data => {
              if (!data.result.IsOk) {
                  alert(data.result.Message);
              } else {
                alert("提交成功");
                $('#contact_body')[0].reset();
              }
          });
       }
    });
  })
 