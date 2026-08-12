val cups = listOf(
    R.drawable.cup_one,
    R.drawable.cup_two,
    R.drawable.cup_three,
    R.drawable.cup_four,
    R.drawable.cup_five,
    R.drawable.cup_six,
    R.drawable.cup_seven,
    R.drawable.cup_eight,
    R.drawable.cup_nine
)

LazyVerticalGrid(
    columns = GridCells.Fixed(3),
    modifier = Modifier.padding(10.dp)
) {
    items(cups) { cup -> 
        Image(
            painter = painterResource(cup),
            contentDescription = null,
            modifier = Modifier.size(100.dp)
        )
    }
}