import { getRequests } from "./dataAccess.js"


export const Requests = () => {
    const requests = getRequests() 
    // grab the local state of the requests data
    const listItems = (request) => {
        return `<li> <input type="text" name="requests" value="${request.description}" /> </li>`}

    let html = `<ul>
            ${requests.map(listItems).join("")
            }
        </ul>
    `

    return html
}
