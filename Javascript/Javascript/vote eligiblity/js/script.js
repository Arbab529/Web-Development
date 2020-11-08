function changeColor()
{
 color =['Red','Green','Blue','Black','Pink']
    for ( var i=0;i<=color.length;i++) {
        document.getElementById('changeColor').style.backgroundColor=color[i];
        
    }
}