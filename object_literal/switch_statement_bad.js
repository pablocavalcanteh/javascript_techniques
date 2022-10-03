
function caffeine(type) {

    let caffeine;

    switch(type) {
        case 'Coffee':
            caffeine = '100 mg';
            break;
        case 'RedBull':
            caffeine = '150 mg';
            break;
        case 'Tea':
            caffeine = '11 mg';
            break;
        case 'Soda':
            caffeine = '32 mg';
            break;
        default:
            caffeine = 'Not found';
    
    }

    return caffeine
}