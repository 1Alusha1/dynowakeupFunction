(async () => {
  try {
    const response = await fetch(
      'https://network-leads-d5f31c95b87f.herokuapp.com/'
    );
    const data = await response.text();
    console.log('✅ Ответ от сервера:', data);
  } catch (err) {
    console.error('❌ Ошибка при отправке запроса:', err);
    process.exit(1); // важно, чтобы GitHub Action знал, что был фейл
  }
})();
