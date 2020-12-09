const header = new Vue({
  el:'#navbar',
  data:{
    img:'resources/construction_logo.png',
    links:[{
      name:'HOME',
      active:true
    },{
      name:'ABOUT',
      active:false
    },{
      name:'SERVICES',
      active:false
    },{
      name:'WORK',
      active:false
    },{
      name:'ARTICLES',
      active:false
    },{
      name:'GET QUOTE',
      active:false
    }]
  },
  methods:{
    activate:function(index){
      for(let i=0;i < this.links.length;i++){
        this.links[i].active = false;
      };
      this.links[index].active = true;
    }
  }
})
