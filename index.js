(async () => {
  try {
    const response = await fetch(
      'https://leads-network.onrender.com/'
    );
    const data = await response.text();
    console.log('✅ Ответ от сервера:', data);
  } catch (err) {
    console.error('❌ Ошибка при отправке запроса:', err);
    process.exit(1); // важно, чтобы GitHub Action знал, что был фейл
  }
})();
