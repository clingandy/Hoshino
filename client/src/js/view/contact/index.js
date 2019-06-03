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
              required: "请输入公司名称",
              minlength: "公司名称最少由六个字符组成"
          },
          name: {
              required: "请输入联系人",
              minlength: "联系人最少由两个字符组成"
          },
          phone: {
              required: "请输入电话",
              minlength: "电话最少由六个字符组成"
          },
          email: {
              required: "请输入电邮",
              email: "请输入正确的电邮"
          },
          message: {
              required: "请输入查询事项",
              minlength: "查询事项最少由五个字符组成"
          },
          address: {
              required: "请输入联络地址"
          },
          authcode: {
              required: "请输入验证码",
              minlength: "验证码必需由四个字符组成"
          }
      }
    });
  }
  $(() => {
    //let apiService = new ApiService();
    $("#submitBtn").click(async function(){
        if(!validform("#contact_body").form()) {
  
        } else {
          let res = await ApiService.submitContactForm(
              {
                  "Contact_ID": 0,
                  "Company": "string",
                  "Contacts": "string",
                  "Phone": "string",
                  "Email": "string",
                  "Matter": "string",
                  "Wechat": "string",
                  "WhatsApp": "string",
                  "Contact_Status": 0,
                  "Processing_Result": "string"
                }
          );
            //$('#contact_body')[0].reset();
        }
    });
  })
 