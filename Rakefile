desc 'Build mouneroyo'
task :build => 'build:all'
EXTENSION_URL = 'https://chrome.google.com/webstore/developer/edit/oebgidoofffgpgmgilokfmmgknlcnklb?hl=ja'

namespace :build do
  task :all => [ :zip, :done ]

  desc 'zip project as uploadable'
  task :zip do
    sh 'zip -r extension.zip extension'
  end

  desc 'print upload url'
  task :done do
    puts "Upload extension.zip to #{EXTENSION_URL}"
    sh "echo '#{EXTENSION_URL}' | pbcopy"
  end
end
