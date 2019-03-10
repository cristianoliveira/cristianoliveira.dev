echo "Building..."
gatsby build

echo "Uploading files..."
if [[ -z "$MYBLOG_FTP_TOKEN" ]]; then
  echo "FTP auth data missing"
  exit 0;
fi

function create_dir() {
  dir=${1}
  ftppath=${dir:7}

  echo "Verifying $dir exists in ftp://ftp.cristianoliveira.com.br/./$ftppath/"
  echo $exist
  echo ".keep" > ./public/.keep
  exists=$(curl --silent --head -u $MYBLOG_FTP_TOKEN ftp://ftp.cristianoliveira.com.br/$ftppath/.keep)
  echo "exists: $exists"
  if [[ -z "$exists" ]]; then
    echo "Creating directory..."
    echo "$dir ftp://ftp.cristianoliveira.com.br/./$ftppath/"
    curl "ftp://ftp.cristianoliveira.com.br/./$ftppath/" --ftp-create-dirs -u $MYBLOG_FTP_TOKEN
    curl -T public/.keep "ftp://ftp.cristianoliveira.com.br/./$ftppath/" --ftp-create-dirs -u $MYBLOG_FTP_TOKEN
  fi
  echo "Updated."
}

function upload() {
  file=${1}
  ftppath=${file:7}

  exists=$(curl --silent --head -u $MYBLOG_FTP_TOKEN ftp://ftp.cristianoliveira.com.br/$ftppath/.keep)
  echo "exists: $exists"
  if [[ -z "$exists" ]]; then
    echo "uploading new file..."
    echo "$file ftp://ftp.cristianoliveira.com.br/$ftppath"
    curl -u $MYBLOG_FTP_TOKEN --ftp-create-dirs -T $file ftp://ftp.cristianoliveira.com.br/$ftppath
  fi
  echo "Updated."
}


directories=$(find public -type d | awk '{ print length, $0 }' | sort -n -s | cut -d" " -f2-)
for d in $directories ; do # Not recommended, will break on whitespace
  create_dir $d
done


files=$(find public -type f | awk '{ print length, $0 }' | sort -n -s | cut -d" " -f2-)
for f in $files ; do # Not recommended, will break on whitespace
  upload $f
done


# for d in $(ls -d */); do # Not recommended, will break on whitespace
#   for f in ./$d* ; do # Not recommended, will break on whitespace
#     upload $f
#     # curl -u $MYBLOG_FTP_TOKEN --ftp-create-dirs -T $f ftp://ftp.cristianoliveira.com.br/$f
#   done
#   for f in ./$d**/* ; do # Not recommended, will break on whitespace
#     upload $f
#     # curl -u $MYBLOG_FTP_TOKEN --ftp-create-dirs -T $f ftp://ftp.cristianoliveira.com.br/$f
#   done
# done
