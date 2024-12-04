export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">안녕하세요! 헬스 페이지입니다!</h1>
      <p className="text-lg mb-8">아래 버튼을 누르면 이용할 수 있습니다!</p>
      <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
        시작하기!
      </button>
    </div>
  );
}
