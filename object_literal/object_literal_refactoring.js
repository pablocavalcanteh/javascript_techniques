
function caffeine(type) {

    let caffeine;

    const dicMap = {

        'Coffee': '100 mg',
        'RedBull': '150 mg',
        'Tea': '11 mg',
        'Soda': '32 mg',
    }

    caffeine = dicMap[type] ?? 'Not found';
    return caffeine;
}