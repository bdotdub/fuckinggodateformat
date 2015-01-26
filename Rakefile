task :default => [ :fuck, :flip ]

task :fuck do
  sh "aws --profile #{ENV["AWS_PROFILE"]} s3 sync --exclude README.md --exclude \".git/*\" --exclude Rakefile --acl public-read . s3://fuckinggodateformat.com/"
end

task :flip do
  # BW: Hacky as well. YOLO amirite?
  str = File.read("index.html")
  str.gsub!(/Fucking Go/, "Flipping Go")
  str.gsub!(/fuckingblock/, "goshdarnblock")
  str.gsub!(/Fucking Block/, "Gosh Darn Block")
  str.gsub!(/Not a fan of profanity.*also works\./, "For the more NSFW site, <a href='http://fuckinggodateformat.com/'>here</a>")

  File.write("index.html", str)

  sh "aws --profile #{ENV["AWS_PROFILE"]} s3 sync --exclude README.md --exclude \".git/*\" --exclude Rakefile --acl public-read . s3://flippinggodateformat.com/"
  sh "git checkout ."
end
