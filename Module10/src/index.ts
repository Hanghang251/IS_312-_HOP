import { LoadDataSource } from './data/localDataSource';
import { DomDisplay } from "./domDisplay"

let ds = new LoadDataSource();
async function dispalyData(): Promise<Element> {
    let dispaly = new DomDisplay();
    dispaly.props = {
        products: await ds.getProducts("name")
    }
    return dispaly.getContent();
}

document.onreadystatechange = () => {
    if (document.readyState == "complete") {
        dispalyData().then(elem => {
            let rootElement = document.getElementById("app");
            rootElement.innerHTML = "";
            rootElement.appendChild(elem);
        })
    }
}
