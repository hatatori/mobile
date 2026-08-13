ImageView imageView = findViewById(R.id.imageView);

// offline
imageView.setImageResource(R.drawable.outra_imagem);

// online
Glide
    .with(this)
    .load("https://exemplo.com/foto.jpg")
    .into(imageView);