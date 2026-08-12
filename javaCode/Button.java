Button botao = findViewById(R.id.button);

botao.setOnClickListener(v -> {
    String nome = editTextNome.getText().toString();
    Toast.makeText(this, "Olá, " + nome, Toast.LENGTH_SHORT).show();
});