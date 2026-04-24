function materialList(mv) {
    // Выводим в консоль список всех материалов модели, чтобы узнать их имена
    const materialNames = mv.model.materials.map(m => m.name);
    console.log("Доступные материалы:", materialNames);
}