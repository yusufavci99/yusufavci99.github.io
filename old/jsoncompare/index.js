window.onload = () => {

    const compare_btn = document.getElementById('compare')
    const json1 = document.getElementById('json1')
    const json2 = document.getElementById('json2')
    const resultElem = document.getElementById('result');
    const transforms = document.getElementById('transforms')

    json1.value = localStorage.getItem("json1") ?? "";
    json2.value = localStorage.getItem("json2") ?? "";
    resultElem.value = localStorage.getItem("resultElem") ?? "";
    transforms.value = localStorage.getItem("transforms") ?? "";

    json1.oninput = () => localStorage.setItem("json1", json1.value);
    json2.oninput = () => localStorage.setItem("json2", json2.value);
    resultElem.oninput = () => localStorage.setItem("resultElem", resultElem.value);
    transforms.oninput = () => localStorage.setItem("transforms", transforms.value);

    compare_btn.onclick = () => {
        try {

            let transforms_str = transforms.value
            
            const transformList = transforms_str ? transforms_str.replace(/(\r\n|\n|\r)/gm, "").split(','): [];

            let transformations_l = {}
            let transformations_r = {}

            for (transform of transformList) {
                [transform_left, transform_right] = transform.split('=')
                console.log(transform_left);
                console.log(transform_right)

                transformations_l[transform_left] = transform_right;
                transformations_r[transform_right] = transform_left;
            }

            json_left = JSON.parse(json1.value)
            json_right = JSON.parse(json2.value)

            result_str = ""

            for (const [key, value] of Object.entries(json_left)) {
                let leftKey = key
                let rightKey = transformations_l[leftKey] ?? leftKey

                if (json_right.hasOwnProperty(rightKey)) {
                    if (value !== json_right[rightKey]) {
                        result_str += `${getName(leftKey, rightKey)}, DISCREPANCY: left value = ${value}, right value = ${json_right[rightKey]}\n`
                    }
                } else {
                    result_str += `${getName(leftKey, rightKey)} Right Side Doesnt Have value\n`
                }
            } 

            for (const [key, value] of Object.entries(json_right)) {
                let rightKey = key
                let leftKey = transformations_r[rightKey] ?? rightKey

                if (!json_left.hasOwnProperty(leftKey)) {
                    result_str += `${getName(leftKey, rightKey)} Left Side Doesnt Have value\n`
                }
            }

            if (!result_str) {
                result_str = 'OK'
            }

            console.log(result_str);
            resultElem.value = result_str;

        } catch (exc) {
            alert(exc)
        }
    }

    function getName(left, right) {
        if (left === right) {
            return left
        } else {
            return `${left} (${right})`
        }
    }

}