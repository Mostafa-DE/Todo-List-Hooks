const styles = {
    root: {
        cursor: "pointer"
    },
    deleteBtn: {
        background: "none",
        border: "1px solid #f44336",
        cursor: "pointer",
        color: "#f44336",
        textTransform: "uppercase",
        padding: "0.6rem 0.8rem",
        margin: " 1rem 0 1rem 1rem",
        fontSize: "0.6rem",
        fontWeight: "700",
        borderRadius: "6px",
        "&:hover " :{
            backgroundColor: "#ff796110"
        }
    },
    editBtn: {
        background: "none",
        border: "1px solid #42a5f5",
        cursor: "pointer",
        color: "#42a5f5",
        fontWeight: "700",
        textTransform: "uppercase",
        padding: "0.6rem 0.8rem",
        margin: " 1rem 0 1rem 1rem",
        fontSize: "0.6rem",
        borderRadius: "6px",
        "&:hover " :{
            backgroundColor: "rgba(22, 220, 255, 0.035)"
        }
    },
    checkBox: {
        "& span": {
            "& svg": {
                "& path": {
                    color: "green"
                }
            }
        }
    },
    snackBar: {
      marginTop: "3.5rem",
    }
}

export default styles;