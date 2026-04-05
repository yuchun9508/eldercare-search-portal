import Container from './ui/Container';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <Container className="text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} 銀髮照護資源搜尋. 版權所有.
        </p>
        <p className="text-xs mt-1">
          本網站使用政府開放資料平台的資料，僅供參考，實際資訊請以官方公告為準。
        </p>
      </Container>
    </footer>
  );
}
