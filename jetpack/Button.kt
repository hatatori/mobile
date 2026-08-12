Button(
    onClick = { },
    modifier = Modifier
        .fillMaxWidth()
        .fillMaxHeight(),
    colors = ButtonDefaults.buttonColors(
        containerColor = Color(0xFF2196F3),
        contentColor = Color.White
    )
) {
    Icon(
        imageVector = Icons.Default.Login,
        contentDescription = null
    )

    Spacer(modifier = Modifier.width(8.dp))

    Text(
        text = "Entrar",
        fontSize = 16.sp
    )
}