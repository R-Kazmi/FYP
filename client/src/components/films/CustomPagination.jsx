import React from "react";
import Pagination from "@material-ui/lab/Pagination";



export default function CustomPagination({ setPage, numOfPages = 10 }) {
    // Scroll to top when page changes
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    };

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: 10,
            }}
        >
                <Pagination
                    onChange={(e) => handlePageChange(e.target.textContent)}
                    count={numOfPages}
                    color="primary"
                    hideNextButton
                    hidePrevButton
                />
         
        </div>
    );
}