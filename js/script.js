// HEADER
const header = new Vue({
  el:'#navbar',
  data:{
    img:'resources/construction_logo.png',
    links:[{
      name:'HOME',
      active:true,
      href:'#'
    },{
      name:'ABOUT',
      active:false,
      href:'#infopannel'
    },{
      name:'SERVICES',
      active:false,
      href:'#explore'
    },{
      name:'WORK',
      active:false,
      href:'#corevalue'
    },{
      name:'ARTICLES',
      active:false,
      href:'#news'
    },{
      name:'GET QUOTE',
      active:false,
      href:'#bottonjumbo'
    }]
  },
  methods:{//THIS METHOD CHANGE COLOR TO LINK AT CLICK
    activate:function(index){
      if(index != (this.links.length - 1)){
        for(let i=0;i < this.links.length;i++){
          this.links[i].active = false;
        };
        this.links[index].active = true;
      }
    }
  }
});

// FOOTER
const footer = new Vue({
  el:'#footer',
  data:{
    social:['fab fa-facebook-f','fab fa-twitter','fab fa-youtube','fab fa-instagram'],

    left:[{
      type:'img',
      content:'resources/footer-logo.png'
    },{
      type:'par',
      content:'We are specialists in the construction of unique and exclusive proprieties . Our work inspires. We pride ourselves on delivering outstanding quality and design for leading clients across the world.'
    },{
      type:'button',
      content:'LEARN MORE'
    }],

    contacts: [{
      icon:'fas fa-globe',
      adress:'Corporate Locatioon 1600 Amphotheatre Parkway London WC1 1BA'
    },{
      icon:'fas fa-home',
      adress:'Residential Location 9521 Broadsberry avenue Paddington RC7 9ZA'
    },{
      icon:'fas fa-phone',
      adress:'1.800.458.556 / 1.800.532.2112'
    },{
      icon:'far fa-envelope',
      adress:'info@your-domain.com'
    },{
      icon:'far fa-clock',
      adress:'Monday - Fryday:9:00 AM - 6:00 PM'
    },{
      icon:'far fa-clock',
      adress:'Saturday - Sunday:9:00 AM - 12:00PM'
    }]

  }
})
