Router.route("/",{
    name:"home", 
    template:"home",
    waitOn:function(){
        
        import "/client/home/home.js"
    },
    action:function(){
        this.render()
    }

})