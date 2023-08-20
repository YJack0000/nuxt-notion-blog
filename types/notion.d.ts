interface DatabaseInfoResponse {
    object: string
    id: string
    cover: string | null
    icon: {
        type: string
        external: {
            url: string
        }
    }
    created_time: string
    created_by: {
        object: string
        id: string
    }
    last_edited_by: {
        object: string
        id: string
    }
    last_edited_time: string
    title: any[]
    description: any[]
    is_inline: boolean
    properties: {
        Category: {
            id: string
            name: string
            type: string
            multi_select: {
                options: {
                    id: string
                    name: string
                    color: string
                }[]
            }
        }
        Description: {
            id: string
            name: string
            type: string
            rich_text: {}
        }
        Visible: {
            id: string
            name: string
            type: string
            checkbox: {}
        }
        Author: {
            id: string
            name: string
            type: string
            people: {}
        }
        Date: {
            id: string
            name: string
            type: string
            date: {}
        }
        Title: {
            id: string
            name: string
            type: string
            title: {}
        }
    }
    parent: {
        type: string
        page_id: string
    }
    url: string
    public_url: string
    archived: boolean
}


