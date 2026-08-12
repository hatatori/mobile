val botao = findViewById<Button>(R.id.button)

botao.setOnClickListener {
    Toast.makeText(this, "Olá, World", Toast.LENGTH_SHORT).show()
}