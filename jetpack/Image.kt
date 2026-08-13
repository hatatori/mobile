// offline
Image(
    painter = painterResource(R.drawable.my_image),
    contentDescription = "Pessoa",
    modifier = Modifier.size(100.dp)
)
 
// online
AsyncImage(
    model = "https://exemplo.com/foto.jpg",
    contentDescription = "Foto",
    modifier = Modifier.size(100.dp)
)