var nome by remember { mutableStateOf("") }

OutlinedTextField(
    value = nome,
    onValueChange = { nome = it },
    placeholder = {
        Text("Digite seu nome")
    },
    singleLine = true
)