function neuron(data) {
    if (data.length === 0) {
        return {};  
    }

    let result = { questions: {}, orders: {} };

    data.forEach(entry => {
        let [typePart, responsePart] = entry.split(' - Response: ');
        let [type, prompt] = typePart.split(': ');
        let key = prompt.toLowerCase().replace(/\s+/g, '_').replace(/\?/g, '');

        if (type === 'Questions') {
            if (!result.questions[key]) {
                result.questions[key] = { question: prompt, responses: [] };
            }
            result.questions[key].responses.push(responsePart.trim());
        } else if (type === 'Orders') {
            if (!result.orders[key]) {
                result.orders[key] = { order: prompt, responses: [] };
            }
            result.orders[key].responses.push(responsePart.trim());
        }
    });

    return result;
}
