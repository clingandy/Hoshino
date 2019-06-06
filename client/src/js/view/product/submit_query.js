//import ApiService from '../../service/api.service';

function validform(formId) {
    return $(formId).validate({
        rules: {
            company: {
                required: true,
                minlength: 6
            },
            contact: {
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
            contact: {
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
            subject: {
                required: "请上传资料内容"
            },
            authcode: {
                required: "请输入验证码",
                minlength: "验证码必需由四个字符组成"
            }
        }
    });
}

let fileInput = document.getElementById('updateFile');
fileInput.addEventListener('change', function () {
    // 检查文件是否选择:
    if (!fileInput.value) {
        return false;
    }
    // 获取File引用:
    var file = fileInput.files[0];
    //判断文件大小
    var size = file.size;
    if (size >= 10 * 1024 * 1024) {
        alert('上传资料不能大于10M!');
        return false;
    }
    var fordata = new FormData();
    fordata.append("file", file);
    var apiUrl = $("#apiUrl").val();

    // $("#subject").val("resources/2019060602/20190606022749243.png");
    // return;
    $.ajax({
        type: "POST",
        url: apiUrl + "Upload/Post",
        data: fordata,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (data) {
            if (data.Code == 200) {
                $("#subject").val(data.Result.filePath);
            }
        }
    });
});

$("#submitBtn").click(async function () {
    if (!validform("#submit_query_form").form()) {
        return false;
    } else {
        $("#user-subject-error").css("display","none");
        if(!$("#subject").val()){
            $("#user-subject-error").css("display","block").val("请上传资料内容");
            return;
        }
        var apiUrl = `${$("#apiUrl").val()}b_appointment_consultation/Post?code=${$("#authcode").val()}`;
        var data = JSON.stringify({
            "Company": $("#company").val(),
            "Contacts": $("#contact").val(),
            "Phone": $("#phone").val(),
            "Email": $("#email").val(),
            "Matter": $("#message").val(),
            "Material": $("#subject").val(),
            "Processing_Result": "新增"
        })
        $.ajax({
            type: "POST",
            url: apiUrl,
            data: data,
            contentType: "application/json-patch+json",
            dataType: "json",
            success: function (data) {
                if (data.Code == 200) {
                    alert("提交成功")
                }else{
                    alert(data.Message)
                }
            },
            error: function(err) {
                alert("提交请求失败")
            }
        });
        // let res = await ApiService.submitQueryForm({
        //     "Company": $("#company").val(),
        //     "Contacts": $("#contact").val(),
        //     "Phone": $("#phone").val(),
        //     "Email": $("#email").val(),
        //     "Matter": $("#message").val(),
        //     "Material": $("#subject").val(),
        //     "Processing_Result": "新增"
        // }, $("#authcode").val());
        // console.log(res)
        //$('#submit_query_form')[0].reset()
    }
});