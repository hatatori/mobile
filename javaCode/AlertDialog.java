new AlertDialog.Builder(this)
    .setMessage("string")
    .setPositiveButton("string", null)
    .setNegativeButton("string", null)
    .setPositiveButton("Iniciar", (dialog, which) -> {  })
    .setSingleChoiceItems(
        new String[]{"Item One", "Item Two", "Item Three"},
        0, 
            (dialog, which) -> {
        switch (which) {
            case 0: FuncaoA(); break;
            case 1: FuncaoB(); break;
            case 2: FuncaoC(); break;
        }
    }) 
    .setMultiChoiceItems(
        new String[]{"Item One", "Item Two", "Item Three"},
        new boolean[]{false, false, false},
        (dialog, which, isChecked) -> {
            switch (which) {
                case 0: if(isChecked){ TarefaA(); } else { TarefaA2(); } ; break;
                case 1: if(isChecked){ TarefaB(); } else { TarefaB2(); } ; break;
                case 2: if(isChecked){ TarefaC(); } else { TarefaC2(); } ; break;
            }
        })
    .show();
