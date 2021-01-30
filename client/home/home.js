import "./home.html"
import "/client/LIB/bootstrap.min.css"
import "/client/LIB/bootstrap.min.js"
import "/client/LIB/jquery-3.5.1.min.js"

Template.home.helpers({
    "hello": function(){
        return "Hello World"
    },
    "Hi": function(){
        return 4 + 4
    },
})

Template.home.events({
    "click #enviar": function(){
        alert("Teste 2")
    },
    "click #mandar": function(){
        $("#objeto").hide()
    },

})

Template.home.onRendered(function () {
    $('#lista-tab').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
         console.log("lala")
      })
    
      $('#execucao-tab').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
        console.log("execução")
      })
    
      $('#espera-tab').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
        console.log("espera")
      })
    
      $('#canceladas-tab').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
        console.log("cancelada")
      })
    
      $('#finalizadas-tab').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
        console.log("finalizada")
      })
      
  });