LazyVerticalGrid(
    columns = GridCells.Fixed(3),
    modifier = Modifier.padding(10.dp),
    contentPadding = PaddingValues(10.dp)
) {
    item {
        Image(
            painter = painterResource(R.drawable.cup_one),
            contentDescription = null,
            modifier = Modifier.size(100.dp)
        )
    }

    item {
        Image(
            painter = painterResource(R.drawable.cup_two),
            contentDescription = null,
            modifier = Modifier.size(100.dp)
        )
    }
    ...
}