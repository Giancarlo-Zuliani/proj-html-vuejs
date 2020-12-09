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
      if(index != (this.links.length - 1)){
        for(let i=0;i < this.links.length;i++){
          this.links[i].active = false;
        };
        this.links[index].active = true;
      }
    }
  }
});

const footer = new Vue({
  el:'footer',
  data:{
    contents :[
      ['<img src="resources/contruction_log.png"  alt="logo">',
      '<p>We are specialist in the construction of unique and exclusive properties. Our work inspires .We pride ourselves on delivering outstanding quality and design for leading clients across the world.</p>',
      '<button type="button" name="button">LEARN MORE</button>'],
      ['<blockquote class="twitter-tweet" data-dnt="true" data-theme="dark"><p lang="en" dir="ltr">Do you need sublime WordPress hosting for your next website? Take advantage of exclusive partner offers that we have secured just for you, &amp; launch your site in seconds with <a href="https://twitter.com/hashtag/avada?src=hash&amp;ref_src=twsrc%5Etfw">#avada</a> on WP Engine hosting &amp; get 30% Off this Black Friday <a href="https://t.co/HBFiOtlnez">https://t.co/HBFiOtlnez</a> <a href="https://twitter.com/hashtag/BlackFriday2020?src=hash&amp;ref_src=twsrc%5Etfw">#BlackFriday2020</a> <a href="https://t.co/fgqRzbr6Dg">pic.twitter.com/fgqRzbr6Dg</a></p>&mdash; ThemeFusion (@Theme_Fusion) <a href="https://twitter.com/Theme_Fusion/status/1332383066631892993?ref_src=twsrc%5Etfw">November 27, 2020</a></blockquote>']
    ]

  }
})
