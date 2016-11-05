var dimension = 8;
var percentage = 100/dimension;
for(var i=0;i<dimension;i++){
  for(var j=0;j<dimension;j++){
    if((i+j)%2==0){
      $("body").append('<div class="red"></div>');
      $(".red").width(percentage + '%').css('paddingBottom',percentage + '%').css('background','red').css('float','left');
    }else{
      $("body").append('<div class="black"></div>');
      $(".black").width(percentage + '%').css('paddingBottom',percentage + '%').css('background','black').css('float','left');
    }
  }
}
