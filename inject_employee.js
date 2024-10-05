function(element, json)
{
    // counter for data entries added
    let count = 0;

    // parse data
    const data = JSON.parse(json);

    // Fillables hashmap
    //
    // - key: Excel sheet column (case-insensitive - ignores white spaces)
    // - val: web field label
    //
    let fillable = new Map([
        ["first name"   , "First Name"],
        ["last name"    , "Last Name"],
        ["address"      , "Address"],
        ["phone number" , "Phone Number"],
        ["company name" , "Company Name"],
        ["email"        , "Email"],
        ["role in company", "Role in Company"]
    ]);

    // click start button
    $("button:contains('Start')").click()

    // loop over employees
    for (const employee of data) {

        const entries = Object.entries(employee);

        for (let [key,value] of entries) {

            // filling web form
            $("label:contains('"+fillable.get(key.toLowerCase().trim())+"')").next().val(value);
        }

        count++;

        // submit data
        $("input[value|='Submit']").click();
        empl = Object.values(employee);
        console.log(`submitted employee (${count}): ${empl[0]} ${empl[1]}`);
    }

    return count;
}