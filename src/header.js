

const header = () => {
    const headerDiv = document.createElement('div');
    headerDiv.id = "header";

    const headerTitle = document.createElement('h1');
    headerTitle.id = "header_title";
    // headerTitle.textContent = "Year 1 in Review";
    headerTitle.textContent = "In Progress"

    headerDiv.appendChild(headerTitle);

    return headerDiv;
}

export default header;