const redirectList = [
    "max.ru",
    "business.max.ru",
    "download.max.ru",
    "go.max.ru",
    "web.max.ru",
    "help.max.ru",
    "legal.max.ru",
    "dev.max.ru"
];

const currentHost = window.location.hostname;

if (redirectList.includes(currentHost)) {
    alert("Goodbye MAX!")
    window.location.href = "https://google.com";
}



