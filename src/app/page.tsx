export default function RedirectPage() {
    return <>
        <script dangerouslySetInnerHTML={{__html: "window.location.href = '/zh';"}}></script>
    </>
}