$.ajax({
    type:'GET',
    url:'http://hrmapiv2.dev.mila66.com/Api/Employees/employeesList',
    data: self.topic,
    dataType: 'json',
    success:function(res){
        if(res.success){
            self.$route.router.go({name:'home'});
        }
    },
    error:function(res){
        let error = JSON.parse(res.responseText);
        self.alert.txt = error.error_msg;
        self.alert.show = true;
        self.alert.hideFn();
        return false;
    }
});
